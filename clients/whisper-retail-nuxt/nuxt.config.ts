import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/"),
    types: resolve(__dirname, "/types"),
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  modules: ["nuxt-icon", "nuxt-snackbar",],
  snackbar: {
    top: true,
    duration: 5000,
    success: "#432894",
  },
  runtimeConfig: {
    mongodbURI: process.env.MONGO_URI,
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:400,700",
        },
      ],
    }
  }
});
