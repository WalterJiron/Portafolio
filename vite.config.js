import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "animation": ["animejs"],
          "icons": ["react-icons"],
          "email": ["@emailjs/browser"],
        },
      },
    },
    // Compress assets
    chunkSizeWarningLimit: 1000,
    minify: "esbuild",
    sourcemap: false,
    target: "esnext",
  },
  // Image optimization
  assetsInclude: ["**/*.webp", "**/*.png", "**/*.jpg", "**/*.jpeg"],
});
