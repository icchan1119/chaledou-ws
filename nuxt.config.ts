// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  app: {
    head:{
      charset: 'utf-8',
      // viewport: 'width=500, initial-scale=1',
      titleTemplate: 'チャレ道 | %s',
      meta: [
        { hid: 'description', name: 'description', content: '恩送りでまわる、挑戦の循環を創りたい挑戦する人の想いや情熱。それに共感した人の想い･気持ちそこには目には見えないけど、なにか大きな価値がある。' || '' },
        { hid: 'keywords', name: 'keywords', content: '挑戦,チャレンジ,チャレ道' },

        { hid: 'og:site_name', property: 'og:site_name', content: 'チャレ道' },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: 'https://challedo.com' },
        { hid: 'og:title', property: 'og:title', content: 'チャレ道|挑戦の循環を作る' },
        { hid: 'og:description', property: 'og:description', content: '恩送りでまわる、挑戦の循環を創りたい挑戦する人の想いや情熱。それに共感した人の想い･気持ちそこには目には見えないけど、なにか大きな価値がある。' },
        { hid: 'og:image', property: 'og:image', content: 'https://challedo.com' },

        { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }
      ]
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
