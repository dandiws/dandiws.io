import { defineConfig, fontProviders } from 'astro/config'
import solid from '@astrojs/solid-js'

export default defineConfig({
  site: 'https://dandiws.my.id',
  output: 'static',
  integrations: [solid()],
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Young Serif',
      cssVariable: '--font-young-serif',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin']
    },
    {
      provider: fontProviders.google(),
      name: 'Instrument Sans',
      cssVariable: '--font-instrument-sans',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin']
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-jetbrains-mono',
      weights: [300, 400],
      styles: ['normal'],
      subsets: ['latin']
    }
  ]
})
