import { sendEmail } from "./_resend.js";

export async function onRequestPost(context) {
  try {
    const data = await context.request.formData();
    const name = data.get("name")?.trim();
    const email = data.get("email")?.trim();
    const message = data.get("message")?.trim();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Name, email, and message are all required.",
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

    // 1. Send notification to admin
    const adminResult = await sendEmail({
      apiKey,
      from: fromEmail,
      to: adminEmail,
      subject: `New Contact Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #180344; max-width: 600px; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #180344; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <div style="margin-top: 20px; padding: 15px; background: #f9f9fb; border-left: 4px solid #7c3aed; border-radius: 4px;">
            <strong>Message:</strong><br/>
            <p style="white-space: pre-wrap; margin-top: 8px;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
    });

    if (!adminResult.ok) {
      return new Response(
        JSON.stringify({
          success: false,
          error: adminResult.error || "Failed to send notification email.",
        }),
        {
          status: adminResult.status || 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // 2. Send confirmation auto-responder to user (optional/graceful if using unverified test sender)
    await sendEmail({
      apiKey,
      from: fromEmail,
      to: email,
      subject: "We have received your message - Glorious Eagles",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; padding: 20px;">
          <h2 style="color: #180344;">Thank you for contacting us, ${escapeHtml(name)}!</h2>
          <p>We have received your inquiry. Our team will review your message and get back to you within 2 business days.</p>
          <p>If your inquiry is urgent, please call us directly at <strong>+1 612-456-6090</strong>.</p>
          <br/>
          <p>Warm regards,<br/><strong>Glorious Eagles Team</strong></p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Message sent successfully!",
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
