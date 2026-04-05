import { resolve, join } from 'path'
import { defineConfig } from 'vite'
import { readdirSync, statSync } from 'fs'

function getHtmlInputs(dir, baseDir = '') {
  const inputs = {}
  const files = readdirSync(dir)
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file.startsWith('.')) continue
    
    const fullPath = join(dir, file)
    if (statSync(fullPath).isDirectory()) {
      Object.assign(inputs, getHtmlInputs(fullPath, join(baseDir, file)))
    } else if (file.endsWith('.html')) {
      let name = join(baseDir, file.replace(/\.html$/, '')).replace(/\\/g, '_').replace(/\//g, '_')
      if (name === 'index') name = 'main'
      inputs[name] = resolve(dir, file)
    }
  }
  return inputs
}

export default defineConfig({
  base: '/Aruomote_Lab/',
  build: {
    rollupOptions: {
      input: getHtmlInputs(__dirname),
    },
  },
})
