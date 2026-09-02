import { sendEmail } from "../_resend.js";

export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();

    const fields = {};
    const attachments = [];

    // Map of file field names to readable prefixes
    const fileFieldLabels = {
      insuranceCard: "Insurance Card",
      wellChild: "Well Child Checkup",
      iep: "IEP Document",
      diagnosticAssessment: "Diagnostic Assessment",
      schoolEvaluation: "School Evaluation",
    };

    // Process all entries from FormData
    for (const [key, value] of data.entries()) {
      if (value && typeof value.arrayBuffer === "function" && value.size > 0) {
        try {
          const buffer = await value.arrayBuffer();
          const base64 = bufferToBase64(buffer);
          const prefix = fileFieldLabels[key] ? `${fileFieldLabels[key]}_` : "";
          attachments.push({
            filename: `${prefix}${value.name || "document.pdf"}`,
            content: base64,
          });
        } catch (err) {
          console.error(`Failed to process attachment ${key}:`, err);
        }
      } else if (typeof value === "string") {
        fields[key] = value.trim();
      }
    }

    const applicantEmail = fields.email || fields.to;
    const childName = `${fields.firstName || ""} ${fields.lastName || ""}`.trim() || "Applicant";

    const apiKey = context.env.RESEND_API_KEY;
    const fromEmail = context.env.EMAIL_FROM || "onboarding@resend.dev";
    const adminEmail = context.env.ADMIN_EMAIL || "president@gloriouseagles.com";

    // Build structured sections for the intake email
    const sections = [
      {
        title: "Child / Client Information",
        items: [
          ["Full Name", childName],
          ["Date of Birth", fields.dateOfBirth],
          ["Gender", fields.gender],
          ["Ethnicity", fields.childEthnicity],
          ["Address", fields.address],
          ["Primary Language", fields.language || fields.otherPrimaryLanguage],
          ["Secondary Language", fields.otherSecondaryLanguage],
          ["Cell Phone", fields.cellPhone],
          ["Home Phone", fields.homePhone],
          ["Email", fields.email],
          ["Guardianship Type", fields.guardianshipType],
          ["Height / Weight", `${fields.height || "N/A"} / ${fields.weight || "N/A"}`],
          ["Hair / Eye Color", `${fields.hairColor || "N/A"} / ${fields.eyeColor || "N/A"}`],
          ["SSN", fields.ssn],
          ["Medical Number", fields.medicalNumber],
          ["PMI Number", fields.PMINumber],
          ["County Responsibility", fields.countyResponsibility],
          ["Financial County", fields.countyFinancialResponsibility],
          ["Burial Account", fields.burialAccountNumber],
        ],
      },
      {
        title: "Insurance & Medical Information",
        items: [
          ["Primary Insurance", fields.primaryInsuranceName],
          ["Primary Policy/PMI", fields.primaryPmiNumber || fields.clientPolicy],
          ["Secondary Insurance", fields.secondaryInsuranceName],
          ["Secondary Policy/PMI", fields.secondaryPmiNumber],
          ["Diagnosis", fields.diagnosis],
          ["Allergies", fields.allergies],
          ["Medical Protocols", fields.protocols],
          ["Medical Equipment", fields.medicalEquipment],
          ["Dietary Needs", fields.dietaryNeeds],
        ],
      },
      {
        title: "Representatives & Emergency Contacts",
        items: [
          [
            "Legal Representative",
            `${fields.legalRepresentativeName || ""} (Phone: ${fields.legalRepresentativePhone || "N/A"}, Address: ${fields.legalRepresentativeAddress || "N/A"})`,
          ],
          [
            "Authorized Representative",
            `${fields.authorizedRepresentativeName || ""} (Phone: ${fields.authorizedRepresentativePhone || "N/A"}, Address: ${fields.authorizedRepresentativeAddress || "N/A"})`,
          ],
          [
            "Primary Emergency Contact",
            `${fields.primaryEmergencyName || ""} (Phone: ${fields.primaryEmergencyPhone || "N/A"}, Address: ${fields.primaryEmergencyAddress || "N/A"})`,
          ],
          [
            "Case Manager",
            `${fields.caseManagerName || ""} (Phone: ${fields.caseManagerPhone || "N/A"}, Address: ${fields.caseManagerAddress || "N/A"})`,
          ],
          [
            "Family Member",
            `${fields.familyMemberName || ""} (Phone: ${fields.familyMemberPhone || "N/A"}, Address: ${fields.familyMemberAddress || "N/A"})`,
          ],
          [
            "Primary Professional",
            `${fields.primaryProfessionalName || ""} (Phone: ${fields.primaryProfessionalPhone || "N/A"}, Address: ${fields.primaryProfessionalAddress || "N/A"})`,
          ],
          [
            "Psychiatrist",
            `${fields.psychiatristName || ""} (Phone: ${fields.psychiatristPhone || "N/A"}, Address: ${fields.psychiatristAddress || "N/A"})`,
          ],
        ],
      },
      {
        title: "Referral Source",
        items: [
          ["Referent Name", fields.referentName],
          ["Relationship", fields.referentRelationship],
          ["Referent Phone", fields.referentPhone],
          ["Referent Email", fields.referentEmail],
          ["Reason for Referral", fields.referentReason],
        ],
      },
    ];

    let htmlSections = "";
    for (const section of sections) {
      const rows = section.items
        .filter(([, val]) => val?.trim() && val !== "N/A" && val !== "N/A / N/A")
        .map(
          ([label, val]) => `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #180344; width: 220px; border-bottom: 1px solid #f0f0f0;">${escapeHtml(label)}</td>
            <td style="padding: 8px 12px; color: #333; border-bottom: 1px solid #f0f0f0;">${escapeHtml(val)}</td>
          </tr>
        `,
        )
        .join("");

      if (rows) {
        htmlSections += `
          <div style="margin-bottom: 24px;">
            <h3 style="color: #7c3aed; border-bottom: 2px solid #e9d5ff; padding-bottom: 6px; margin-bottom: 8px;">${escapeHtml(section.title)}</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              ${rows}
            </table>
          </div>
        `;
      }
    }

    const attachmentSummary =
      attachments.length > 0
        ? `<p style="margin-top: 15px; color: #047857; font-weight: bold;">📎 ${attachments.length} attachment(s) included: ${attachments.map((a) => escapeHtml(a.filename)).join(", ")}</p>`
        : `<p style="margin-top: 15px; color: #6b7280;">No file attachments included.</p>`;

    // 1. Send detailed email to admin
    const adminResult = await sendEmail({
      apiKey,
      from: fromEmail,
      to: adminEmail,
      subject: `New Admission Application: ${childName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #180344; max-width: 700px; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #180344; margin-top: 0;">New Admission Application Received</h2>
          <p>An intake form has been submitted for <strong>${escapeHtml(childName)}</strong>.</p>
          ${attachmentSummary}
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          ${htmlSections}
        </div>
      `,
      attachments,
    });

    if (!adminResult.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: adminResult.error || "Failed to deliver admission application.",
        }),
        {
          status: adminResult.status || 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // 2. Send receipt confirmation to applicant / parent
    let warning = null;
    if (applicantEmail) {
      const confirmResult = await sendEmail({
        apiKey,
        from: fromEmail,
        to: applicantEmail,
        subject: "Admission Application Received - Glorious Eagles LLC",
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; padding: 20px;">
            <h2 style="color: #180344;">Thank You, we have received your application!</h2>
            <p>This is to confirm that the admission application for <strong>${escapeHtml(childName)}</strong> has been successfully submitted to Glorious Eagles LLC.</p>
            <p>Our clinical admissions team will review the submitted information and documents. We will be in touch with next steps within 2 to 3 business days.</p>
            <p>If you have any questions or need to provide additional details in the meantime, please contact us at <a href="mailto:info@gloriouseagles.com">info@gloriouseagles.com</a> or call <strong>+1 612-456-6090</strong>.</p>
            <br/>
            <p>Warm regards,<br/><strong>Glorious Eagles Clinical Team</strong></p>
          </div>
        `,
      });

      if (!confirmResult.ok) {
        warning = "Application received, but auto-confirmation receipt could not be sent.";
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        warning,
        message: "Application submitted successfully!",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || "An unexpected error occurred processing the intake form.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}

function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function bufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
