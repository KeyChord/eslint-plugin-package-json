import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: "src/default.ts",
    outDir: "exports",
    exports: true,
    dts: true,
  },
});
