import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Aruomote_Lab/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'works/index.html'),
        library: resolve(__dirname, 'library/index.html'),
        guide: resolve(__dirname, 'guide/index.html'),
        guide_ai_generators: resolve(__dirname, 'guide/ai-generators.html'),
        about: resolve(__dirname, 'about/index.html'),
      },
    },
  },
})
