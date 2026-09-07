import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set `base` to the repo name if deploying to a GitHub Pages project site,
  // e.g. base: "/portfolio/". Leave as "/" for Netlify, Vercel or a root domain.
  base: "/",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
  server: {
    port: 5173,
    open: true,
  },
});
