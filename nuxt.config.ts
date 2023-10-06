// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: "RustyUranium — Official Website",
      meta: [
        {
          name: "description",
          content: "Welcome to RustyUranium Offical Website. Join our Best 5X PVP Rust Server."
        }
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/uranium.png"
        }
      ]
    }
  }
})