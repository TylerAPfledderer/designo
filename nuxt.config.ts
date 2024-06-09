import svgLoader from "vite-svg-loader";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/eslint", "@nuxtjs/storybook", "@vueuse/nuxt"],

  components: [
    "~/components/design-system",
    { path: "~/components", pathPrefix: false },
  ],

  eslint: {
    config: {
      typescript: true,
    },
  },

  css: ["@/assets/css/global.css"],

  postcss: {
    plugins: {
      "@pandacss/dev/postcss": {},
    },
  },

  vite: {
    plugins: [svgLoader()],
  },
});
