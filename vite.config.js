/* eslint-disable no-unused-vars */
import { dependencies } from "./package.json";
import { defineConfig } from "vite";
import { splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";

const reactDeps = Object.keys(dependencies).filter(
  (key) => key === "react" || key.startsWith("react-")
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  build: {
    target: "es2015",
    sourcemap: false,
    manifest: true,
    minify: "esbuild",
    cssMinify: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        vendor: reactDeps,
        ...Object.keys(dependencies).reduce((chunks, name) => {
          if (!reactDeps.includes(name)) {
            chunks[name] = [name];
          }
          return chunks;
        }, {}),
      },
    },
  },
});
