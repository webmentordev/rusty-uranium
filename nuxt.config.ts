// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-gtag',
    'nuxt-simple-sitemap'
  ],
  runtimeConfig: {
    "api": process.env.API,
    public: {
      "api": process.env.API
    }
  },
  gtag: {
    id: process.env.ANALYTICSKEY
  },
  sitemap: {
    sitemaps: true
  },
  site: {
    url: 'https://rustyuranium.online',
    name: 'RustyUranium — Official Website',
    description: 'Welcome to RustyUranium Offical Website. Join our Best Rust 5X PVP Rust Server.',
    defaultLocale: 'en',
  },
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