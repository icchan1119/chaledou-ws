// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/styles/style.scss"],
  plugins: [
    '@/plugins/gsap.ts'
  ],
  modules: ['@pinia/nuxt']
})