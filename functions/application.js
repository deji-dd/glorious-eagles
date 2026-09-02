import { sendEmail } from "./_resend.js";

export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const cover = data.get("cover");
    const resume = data.get("resume");

    if (!name || !email) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name and email are required.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const apiKey = context.env.RESEND_API_KEY;
    const fromEmail = context.env.EMAIL_FROM || "onboarding@resend.dev";
    const adminEmail = context.env.ADMIN_EMAIL || "president@gloriouseagles.com";

    const attachments = [];

    // Helper to process uploaded file or link
    const formatAttachmentLink = async (item, defaultName) => {
      if (!item) return "Not provided";
      if (typeof item === "string") {
        if (item.startsWith("http://") || item.startsWith("https://")) {
          return `<a href="${escapeHtml(item)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item)}</a>`;
        }
        return escapeHtml(item);
      }
      // If it's a File/Blob from FormData
      if (item && typeof item.arrayBuffer === "function") {
        try {
          const buffer = await item.arrayBuffer();
          const base64 = bufferToBase64(buffer);
          const filename = item.name || defaultName;
          attachments.push({
            filename,
            content: base64,
          });
          return `${escapeHtml(filename)} (attached to this email)`;
        } catch {
          return "Attached file (could not be read)";
        }
      }
      return "Provided";
    };

    const coverHtml = await formatAttachmentLink(cover, "Cover_Letter.pdf");
    const resumeHtml = await formatAttachmentLink(resume, "Resume.pdf");

    // 1. Send notification to admin
    const adminResult = await sendEmail({
      apiKey,
      from: fromEmail,
      to: adminEmail,
      subject: `New Job Application: ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #180344; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #180344; margin-bottom: 20px;">New Job Application Received</h2>
          <p><strong>Applicant Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <div style="margin-top: 15px; padding: 15px; background: #f9f9fb; border-radius: 4px;">
            <p><strong>Cover Letter:</strong> ${coverHtml}</p>
            <p><strong>Resume:</strong> ${resumeHtml}</p>
          </div>
        </div>
      `,
      attachments,
    });

    if (!adminResult.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: adminResult.error || "Failed to send application email.",
        }),
        {
          status: adminResult.status || 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // 2. Send confirmation to applicant
    await sendEmail({
      apiKey,
      from: fromEmail,
      to: email,
      subject: "Thank you for applying to Glorious Eagles LLC!",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; padding: 20px;">
          <h2 style="color: #180344;">Thank You for Your Application, ${escapeHtml(name)}!</h2>
          <p>Thanks for taking the time to apply for a position with Glorious Eagles LLC. We appreciate your interest in joining our team.</p>
          <p>Our hiring team is currently reviewing applications. If your profile matches our current needs, we will reach out to schedule an interview.</p>
          <br/>
          <p>Best regards,<br/><strong>Glorious Eagles Team</strong></p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
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
        error: err.message || "An unexpected error occurred.",
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
