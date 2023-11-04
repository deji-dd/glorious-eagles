export async function onRequestPost(context) {
  try {
    let data = await context.request.formData();
    let name = data.get("name");
    let email = data.get("email");
    let cover = data.get("cover");
    let resume = data.get("resume");

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
                "</p><br /><p>Email: " +
                email +
                "</p><br/><p>Cover Letter: <a href='" +
                cover +
                "'>" +
                cover +
                "</a></p><br/><p>Resume: <a href='" +
                resume +
                "'>" +
                resume +
                "</a></p></body>",
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
                "We have received your application and will get back to you soon\n\n-Glorious Eagles LLC",
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
