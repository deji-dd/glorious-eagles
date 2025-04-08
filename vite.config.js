import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: "./postcss.config.js", // Ensure PostCSS is used with Tailwind
  },
  assetsInclude: ["**/*.svg", "**/*.png", "**/*.jpg"], // Ensure Vite processes these assets correctly
});
