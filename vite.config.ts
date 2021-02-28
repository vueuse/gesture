import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  root: 'demo/',
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: '@vueuse/gesture',
        replacement: resolve(__dirname, './src/index.ts'),
      },
    ],
  },
})
