import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      // colors used in projects
      colors: {
        primary: "#F6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: "#FBFBFB",
      },

    },
  },
  plugins: [react(), tailwindcss()],
});
