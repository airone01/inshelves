import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  // css: ['@/assets/css/main.css'],
  ssr: false,
})
