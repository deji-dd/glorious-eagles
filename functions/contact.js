export async function onRequestPost(context) {
  try {
    let data = await context.request.formData();
    let name = data.get("name");
    let email = data.get("email");
    let message = data.get("message");

    await fetch(
      new Request("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: "president@gloriouseagles.com",
                  name: "Glorious Eagles LLC",
                },
              ],
            },
          ],
          from: {
            email: "president@gloriouseagles.com",
            name: "Glorious Eagles LLC",
          },
          subject: "New Application",
          content: [
            {
              type: "text/html",
              value:
                "<body><p>Name: " +
                name +
                "</p><br/><p>Email: " +
                email +
                "</p><br/><p>Message: " +
                message,
            },
          ],
        }),
      })
    );

    await fetch(
      new Request("https://api.mailchannels.net/tx/v1/send", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                  email: email,
                  name: name,
                },
              ],
            },
          ],
          from: {
            email: "president@gloriouseagles.com",
            name: "Glorious Eagles LLC",
          },
          subject: "Thank you for applying!",
          content: [
            {
              type: "text/plain",
              value:
                "Thank you for contacting us.\n\nThe response will be sent to the email address you’ve contacted us with within 2 business days.\n\n If it’s urgent, we encourage you to call us at +1 612-4566-090\n\nHave a wonderful day!",
            },
          ],
        }),
      })
    );
    return new Response(null);
  } catch {
    return new Response(null);
  }
}
