import { onRequestPost as __career_submit_js_onRequestPost } from "/Users/mac/Desktop/glorious-eagles/functions/career/submit.js"

export const routes = [
    {
      routePath: "/career/submit",
      mountPath: "/career",
      method: "POST",
      middlewares: [],
      modules: [__career_submit_js_onRequestPost],
    },
  ]