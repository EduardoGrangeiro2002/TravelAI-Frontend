// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "node:path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: path.resolve(__dirname, 'assets/css'),
  },

  css: ['~/assets/css/main.css'],
})
