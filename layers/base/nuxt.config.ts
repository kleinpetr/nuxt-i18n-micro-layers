// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-i18n-micro',
  ],
  i18n: {
    locales: [
      { code: 'cs', iso: 'cs-CZ', dir: 'ltr' },
      { code: 'en', iso: 'en-US', dir: 'ltr' },
    ],
    defaultLocale: 'cs',
    translationDir: 'locales',
    fallbackLocale: 'cs',
    meta: false,
    autoDetectLanguage: false,
    disablePageLocales: true,
  },
  nitro: {
    preset: 'vercel'
  }
})
