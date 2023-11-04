export async function onRequestPost(context) {
  try {
    let data = await context.request.formData();
    let name = data.get("name");
    let email = data.get("email");
    let cover = data.get("cover");
    let resume = data.get("resume");
    console.log(data);

    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
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
        subject: "New Application (Website Testing)",
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
    });
    let respContent = "";

    const resp = await fetch(send_request);
    const respText = await resp.text();
    respContent = resp.status + " " + resp.statusText + "\n\n" + respText;

    return new Response(respContent);
  } catch {
    return new Response("fail");
  }
}
