import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/LeonelVincent/',
  plugins: [vue()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
