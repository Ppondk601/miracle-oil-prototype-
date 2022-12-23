export default {
  server: {
    host: "0.0.0.0"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: "static",
  ssr: false,
  head: {
    title: 'Miracle-oil-Product',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { src: "https://kit.fontawesome.com/c1dded7690.js", crossorigin: "anonymous " },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      { href: "https://fonts.googleapis.com/css2?family=Athiti:wght@300;600;700&display=swap", rel: "stylesheet" },
    ],
    script: [
      { src: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  }
}
