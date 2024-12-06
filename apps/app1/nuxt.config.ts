// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  extends: [
    '../../layers/base/'
  ],

  compatibilityDate: '2024-12-06'
})