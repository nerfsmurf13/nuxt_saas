// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve} from 'path'
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  alias:{
    '@': resolve(__dirname, '/'),
  }
})
