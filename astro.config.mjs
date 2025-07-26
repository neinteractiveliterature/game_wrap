// @ts-check
import { defineConfig, envField } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // adapter: aws(),

  integrations: [mdx()],
  //   favicons({
  //     name: "New England Interactive Literature",
  //     short_name: "NEIL",
  //     input: "src/assets/cropped-neilSquare.png",
  //   }),
  //   react(),
  //   pagefind(),

  // env: {
  //   schema: {
  //     AKISMET_API_KEY: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: false,
  //     }),
  //     CONTACT_FORM_EMAIL_TO: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: true,
  //     }),
  //     DATABASE_URL: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: false,
  //     }),
  //     SMTP_URL: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: true,
  //     }),
  //     GITHUB_OAUTH_ID: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: false,
  //     }),
  //     GITHUB_OAUTH_SECRET: envField.string({
  //       access: "secret",
  //       context: "server",
  //       optional: false,
  //     }),
  //   },
  // },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // can't get import to work until Bootstrap supports it
          silenceDeprecations: ["import", "legacy-js-api"],
          quietDeps: true,
        },
      },
    },
  },

  experimental: {
    fonts: [
      {
        provider: "local",
        name: "Metro",
        cssVariable: "--font-metro",
        variants: [
          {
            src: [
              "./src/assets/fonts/Metro-webfont.woff",
              "./src/assets/fonts/Metro-webfont.ttf",
              "./src/assets/fonts/Metro-webfont.eot",
            ],
          },
        ],
      },
      {
        provider: "local",
        name: "TeX Gyre Pagella",
        cssVariable: "--font-tex-gyre-pagella",
        fallbacks: [
          "Hoefler Text",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        variants: [
          {
            src: [
              "./src/assets/fonts/texgyrepagella-regular-webfont.woff",
              "./src/assets/fonts/texgyrepagella-regular-webfont.ttf",
              "./src/assets/fonts/texgyrepagella-regular-webfont.eot",
            ],
          },
          {
            src: [
              "./src/assets/fonts/texgyrepagella-bold-webfont.woff",
              "./src/assets/fonts/texgyrepagella-bold-webfont.ttf",
              "./src/assets/fonts/texgyrepagella-bold-webfont.eot",
            ],
            weight: "bold",
          },
          {
            src: [
              "./src/assets/fonts/texgyrepagella-italic-webfont.woff",
              "./src/assets/fonts/texgyrepagella-italic-webfont.ttf",
              "./src/assets/fonts/texgyrepagella-italic-webfont.eot",
            ],
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/texgyrepagella-bolditalic-webfont.woff",
              "./src/assets/fonts/texgyrepagella-bolditalic-webfont.ttf",
              "./src/assets/fonts/texgyrepagella-bolditalic-webfont.eot",
            ],
            weight: "bold",
            style: "italic",
          },
        ],
      },
      {
        provider: "local",
        name: "Gentium Book Basic",
        cssVariable: "--font-gentium-book-basic",
        fallbacks: [
          "Hoefler Text",
          "Georgia",
          "Times New Roman",
          "Times",
          "serif",
        ],
        variants: [
          {
            src: [
              "./src/assets/fonts/genbkbasr-webfont.woff2",
              "./src/assets/fonts/genbkbasr-webfont.woff",
              "./src/assets/fonts/genbkbasr.ttf",
            ],
          },
          {
            src: [
              "./src/assets/fonts/genbkbasb-webfont.woff2",
              "./src/assets/fonts/genbkbasb-webfont.woff",
              "./src/assets/fonts/genbkbasb.ttf",
            ],
            weight: "bold",
          },
          {
            src: [
              "./src/assets/fonts/genbkbasi-webfont.woff2",
              "./src/assets/fonts/genbkbasi-webfont.woff",
              "./src/assets/fonts/genbkbasi.ttf",
            ],
            style: "italic",
          },
          {
            src: [
              "./src/assets/fonts/genbkbasbi-webfont.woff2",
              "./src/assets/fonts/genbkbasbi-webfont.woff",
              "./src/assets/fonts/genbkbasbi.ttf",
            ],
            weight: "bold",
            style: "italic",
          },
        ],
      },
      {
        provider: "local",
        name: "Raleway",
        cssVariable: "--font-raleway",
        variants: [
          {
            src: [
              "./src/assets/fonts/raleway-regular-webfont.woff2",
              "./src/assets/fonts/raleway-regular-webfont.woff",
              "./src/assets/fonts/Raleway-Regular.ttf",
            ],
          },
          {
            src: [
              "./src/assets/fonts/raleway-italic-webfont.woff2",
              "./src/assets/fonts/raleway-italic-webfont.woff",
              "./src/assets/fonts/Raleway-Italic.ttf",
            ],
            style: "italic",
          },
        ],
      },
      {
        provider: "local",
        name: "Raleway Light",
        cssVariable: "--font-raleway-light",
        variants: [
          {
            src: [
              "./src/assets/fonts/raleway-lightitalic-webfont.woff2",
              "./src/assets/fonts/raleway-lightitalic-webfont.woff",
              "./src/assets/fonts/Raleway-LightItalic.ttf",
            ],
            style: "italic",
          },
        ],
      },
    ],
  },
});
