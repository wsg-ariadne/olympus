// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: 'empty - please set',
      authDomain: 'empty - please set',
      authClientId: 'empty - please set'
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css'
  }
})
