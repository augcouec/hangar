// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/scss/global.scss'],
  buildModules: ['@nuxtjs/google-fonts'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
  googleFonts: {
    families: {
      'Work+Sans': true,
      'Playfair+Display': true,
    },
  },
});
