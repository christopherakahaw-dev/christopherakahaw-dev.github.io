import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo at /portfoliio/
export default defineConfig({
  plugins: [react()],
  base: "/portfoliio/",
});
