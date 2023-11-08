import { defineConfig } from "tsup";

export default defineConfig({
  entry: ['src/index.ts'],
  target: "es5",
  format: ['cjs','esm'],
  legacyOutput: true,
  platform: "node",
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  minify: true,
  shims: true,
});
