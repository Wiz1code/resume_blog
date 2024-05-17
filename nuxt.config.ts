export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-aos",
    "@vueuse/motion/nuxt",
    "@vueuse/sound/nuxt",
  ],
  app: {
    baseURL: "/",
    head: {
      title: "CodeのBlog",
      link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    },
  },
  devtools: { enabled: false },
  devServer: {
    port: 3333,
  },
  vite: {
    optimizeDeps: {
      include: ["howler"],
    },
  },
});
