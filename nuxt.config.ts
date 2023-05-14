// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
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
  },
  googleFonts: {
    families: {
      'IBM+Plex+Sans': {
        wght: [400, 700],
        ital: [400, 700]
      },
      'IBM+Plex+Mono': {
        wght: [400, 700],
        ital: [400, 700]
      }
    }
  }
})
