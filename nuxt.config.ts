import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
   bridge: false,
   target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Frameworks Catalog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "You can look for your type frameworks in any programming languages and get latest information about best frameworks" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ["~/node_modules/bootstrap/dist/css/bootstrap.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/star-rating.js', mode: 'client'},
    '~/plugins/disqus'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // "@nuxtjs/eslint-module",
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en",
    },
  },
  

  sitemap: {
      hostname: "https://frameworkscatalog.com",
      gzip: false,
      filter({ routes }) {
          return routes.map(route => {
              route.url = `${route.url}/`;
              return route;
          });
      },
      defaults: {
          changefreq: "daily",
          priority: 1,
          lastmod: new Date()
      },
      async routes () {
        const { $content } = require('@nuxt/content')
        const files = await $content('frameworks',{ deep: true }).only(['path']).fetch()
        const all = [
            "/play/normal",
            "/play/popular",
            "/play/sexy-and-dirty",
            "/play/party",
            "/play/for-couple",
            "/play/teens"
        ]
        return []
        .concat(...files.map(file => '/'+file.path))
        // .concat(...all)
      },
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: { 
    fullTextSearchFields: ["title", "description"],
    apiPrefix: 'api'
   },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:['vue-star-rating']
  },
});
