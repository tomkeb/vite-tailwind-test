/** @type {import('vite').UserConfig} */

const path = require("path");
import react from "@vitejs/plugin-react";

export default {
  plugins: [react()],
  base: "",
  root: path.resolve(__dirname, "src"),
  server: {
    host: '127.0.0.1',
    port: 8000,
    hot: true
  },
  build: {
    minify: true,
    watch: true,
    sourcemap: false,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
};
