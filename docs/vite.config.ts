import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  resolve: {
    alias: [
      {
        find: '@vueuse/gesture',
        replacement: resolve(__dirname, '../src/index.ts'),
      },
    ],
  },
})
