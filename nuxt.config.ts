// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode'
  ],

  content: {},
  
  css: [
    '@/assets/styles/main.css'
  ],

  vite: {
    plugins: [
      svgLoader(),
    ],
  }
})
