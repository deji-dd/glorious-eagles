import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailChannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Test", email: "dejib50@gmail.com" }],
    },
  ],
  from: {
    name: "Tester",
    email: "president@gloriouseagles.com",
  },
  respondWith: () =>
    new Response(null, {
      status: 302,
      headers: { Location: "/" },
    }),
});
