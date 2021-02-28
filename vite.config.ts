import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'demo/',
  plugins: [vue()],
  alias: [
    {
      find: '@vueuse/gesture',
      replacement: resolve(__dirname, './src/index.ts'),
    },
  ],
})
