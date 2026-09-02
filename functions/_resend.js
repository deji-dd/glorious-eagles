/**
 * Helper to send emails via Resend's REST API.
 * Works seamlessly in Cloudflare Pages Functions and edge runtimes.
 */
export async function sendEmail({ apiKey, from, to, subject, html, text, attachments = [] }) {
  if (!apiKey) {
    return {
      ok: false,
      status: 500,
      error:
        "Missing RESEND_API_KEY environment variable. Please configure it in your Cloudflare dashboard or .env file.",
    };
  }

  const payload = {
    from,
    to: Array.isArray(to) ? to : [to],
    subject,
  };

  if (html) payload.html = html;
  if (text) payload.text = text;
  if (attachments && attachments.length > 0) {
    payload.attachments = attachments;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMessage = data?.message || `Resend API error: HTTP ${response.status}`;
      return {
        ok: false,
        status: response.status,
        error: errorMessage,
      };
    }

    return {
      ok: true,
      status: 200,
      data,
    };
  } catch (error) {
    return {
      ok: false,
      status: 500,
      error: error.message || "Network error while connecting to Resend",
    };
  }
}
