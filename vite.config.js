import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

/**
 * Dev server plugin to execute Cloudflare Pages Functions locally during `bun dev`.
 */
function cloudflarePagesDevPlugin() {
  return {
    name: "cloudflare-pages-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url ? req.url.split("?")[0] : "";
        if (req.method !== "POST") return next();

        let handler;
        if (url === "/contact") {
          handler = (await import("./functions/contact.js")).onRequestPost;
        } else if (url === "/application") {
          handler = (await import("./functions/application.js")).onRequestPost;
        } else if (url === "/api/intake") {
          handler = (await import("./functions/api/intake.js")).onRequestPost;
        }

        if (!handler) return next();

        try {
          const chunks = [];
          for await (const chunk of req) {
            chunks.push(chunk);
          }
          const bodyBuffer = Buffer.concat(chunks);

          const fullUrl = `http://${req.headers.host || "localhost"}${req.url}`;
          const webRequest = new Request(fullUrl, {
            method: req.method,
            headers: req.headers,
            body: bodyBuffer.length > 0 ? bodyBuffer : undefined,
            duplex: "half",
          });

          const env = loadEnv(server.config.mode, process.cwd(), "");

          const context = {
            request: webRequest,
            env: {
              ...process.env,
              ...env,
            },
          };

          const webResponse = await handler(context);
          res.statusCode = webResponse.status;
          webResponse.headers.forEach((val, key) => {
            res.setHeader(key, val);
          });
          const responseBody = await webResponse.text();
          res.end(responseBody);
        } catch (err) {
          console.error("Dev API handler error:", err);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: false, error: err.message }));
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflarePagesDevPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js", // Ensure PostCSS is used with Tailwind
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router")
          ) {
            return "react-vendor";
          }
          if (id.includes("node_modules/lucide-react") || id.includes("node_modules/@radix-ui/")) {
            return "ui-vendor";
          }
        },
      },
    },
    sourcemap: false,
  },
});
