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
  "/index.html": {
    headerClasses: "header--absolute",
    title: "Homepage",
    isDark: false,
    footerClass: "",
  },
  "/services.html": {
    title: "Services",
    isDark: false,
    footerClass: "footer--border-off",
  },
  "/about.html": {
    title: "About",
    isDark: true,
    footerClass: "",
  },
  "/contact.html": {
    title: "Contact",
    isDark: true,
    footerClass: "footer--border-off",
  },
  "/publication-entry.html": {
    title: "Publication",
    isDark: true,
    footerClass: "",
  },
  "/publications.html": {
    title: "Publications",
    isDark: true,
    footerClass: "",
  },
  "/service-entry.html": {
    title: "Services",
    isDark: false,
  },
  "/team.html": {
    title: "Teams",
    isDark: true,
  },
  "/team-entry.html": {
    title: "Teams",
    isDark: true,
  },
};

export default defineConfig({
  root: __dirname,
  base: "/",
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context(pagePath) {
        return pageData[pagePath] || {};
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
