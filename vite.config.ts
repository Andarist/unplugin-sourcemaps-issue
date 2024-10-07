/* Copyright 2020-2024 Record Replay Inc. */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteSourcemap } from "unplugin-sourcemaps";

export default defineConfig({
  plugins: [react(), ViteSourcemap()],
  build: {
    sourcemap: true,
  },
});
