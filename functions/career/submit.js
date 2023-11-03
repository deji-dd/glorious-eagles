import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export async function onRequestPost(context) {
  try {
    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              { email: "buraimohabdulhaqq@gmail.com", name: "Test Recipient" },
            ],
          },
        ],
        from: {
          email: "president@gloriouseagles.com",
          name: "Test Sender",
        },
        subject: "Test Subject",
        content: [
          {
            type: "text/plain",
            value: "Test message content",
          },
        ],
      }),
    });
    let respContent = "";

    const resp = await fetch(send_request);
    const respText = await resp.text();
    respContent = resp.status + " " + resp.statusText + "\n\n" + respText;
    console.log(respContent);

    return new Response("success");
  } catch {
    return new Response("fail");
  }
}
