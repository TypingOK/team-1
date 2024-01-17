import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src", "index.ts"),
      formats: ["es", "cjs"],
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "React",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
  plugins: [react(), dts({ copyDtsFiles: true })],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
