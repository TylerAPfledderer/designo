import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/eslint", "@nuxtjs/storybook"],

  components: ["~/components/design-system", "~/components"],

  eslint: {
    config: {
      typescript: true,
    },
  },
  alias: {
    "styled-system": resolve("./styled-system"),
  },

  css: ["@/assets/css/global.css"],

  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },
});
