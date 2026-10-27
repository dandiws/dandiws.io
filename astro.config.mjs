import { defineConfig } from 'astro/config'
import solid from '@astrojs/solid-js'

export default defineConfig({
  site: 'https://dandiws.my.id',
  output: 'static',
  integrations: [solid()]
})
