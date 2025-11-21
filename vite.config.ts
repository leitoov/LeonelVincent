import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Vite config with base set for GitHub Pages under /LeonelVincent/
export default defineConfig({
  base: '/LeonelVincent/',
  plugins: [vue()],
})
