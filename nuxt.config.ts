// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['nuxt-swiper'],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.includes('-')
    }
  }
})
