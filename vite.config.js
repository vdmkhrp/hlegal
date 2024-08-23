import { defineConfig } from "vite";
import { resolve } from "path";
import fs from "fs";
import { dirname } from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import handlebars from "vite-plugin-handlebars";

const __dirname = dirname(new URL(import.meta.url).pathname);

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

const pageData = {
  '/index.html': {
    title: 'Homepage',
  },
  '/services.html': {
    title: 'Services',
  },
  '/about.html': {
    title: 'About',
  },
  '/contact.html': {
    title: 'Contact',
  },
  '/publication-entry.html': {
    title: 'Publication',
  },
  '/publications.html': {
    title: 'Publications',
  },
  '/service-entry.html': {
    title: 'Services',
  },
  '/team.html': {
    title: 'Teams',
  },
  '/team-entry.html': {
    title: 'Teams',
  },
};

export default defineConfig({
  root: __dirname,
  base: "/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context(pagePath) {
        return pageData[pagePath];
      },
    }),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        ...getHtmlInputs(),
        main: resolve(__dirname, "src/js/script.js"),
      },
    },
    outDir: "dist",
    assetsDir: "assets",
  },
});
