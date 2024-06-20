export default defineNuxtConfig({
  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@vee-validate/nuxt",
    "radix-vue/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
  ],

  i18n: {
    strategy: "prefix_except_default",
    langDir: "./app/locales/",
    defaultLocale: "ru",
    locales: [{ code: "ru", iso: "ru-RU", file: "ru-RU.json" }],
  },

  srcDir: "./src",

  components: {
    dirs: [
      "./components/",
      "./shared/icons",
      "./shared/buttons",
    ],
  },

  dir: {
    pages: "./pages/",
    layouts: "./app/layouts/",
    assets: "./app/assets/",
  },

  css: ["@/app/scss/main.scss"],

  app: {
    head: {
      title: "Seenday",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
        },
      ],
    },
  },

  runtimeConfig: {},
});
