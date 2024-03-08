// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head:{
      titleTemplate: 'チャレ道 | %s'
    }
  },

  devtools: { enabled: true },
  css: ["@/assets/styles/style.scss"],
  plugins: [
    '@/plugins/gsap.ts'
  ],
  build: {
    transpile: ['gsap']
  },
  modules: ['@pinia/nuxt',"nuxt-microcms-module"],
  microCMS: {
       serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
       apiKey: process.env.MICROCMS_API_KEY,
  },
})
