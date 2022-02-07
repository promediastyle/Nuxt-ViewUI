export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Tailwind CSS & View UI',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      class: 'antialiased text-base'
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/iview.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/view-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: [
      {
        code: 'ru',
        iso: 'ru-RU',
        file: 'ru.js',
        name: 'Русский'
      },
      {
        code: 'ua',
        iso: 'ua-UA',
        file: 'ua.js',
        name: 'Ukraine'
      },
    ],
    defaultLocale: 'ru',
    lazy: true,
    langDir: 'lang/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    publicPath: 'assets',
  },

  generate: {
    dir: 'dist',
    fallback: '404.html'
  },

  cli: {
    badgeMessages: ['Made in Fubon | http://thefubon.com'],
    bannerColor: 'yellow'
  },

  loading: {
    color: '#ffcc00',
    height: '2px'
  },
}
