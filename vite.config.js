import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

// Функция для автоматического обнаружения HTML файлов
const getHtmlInputs = () => {
  const files = fs
    .readdirSync(__dirname)
    .filter((file) => file.endsWith(".html"));
  return files.reduce((inputs, file) => {
    const key = file.replace(/\.html$/, "");
    inputs[key] = resolve(__dirname, file);
    return inputs;
  }, {});
};

export default defineConfig({
  root: "",
  base: "",
  build: {
    rollupOptions: {
      input: getHtmlInputs(),
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
