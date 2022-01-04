import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    exclude: ['vue-demi'],
  },
  resolve: {
    alias: [
      {
        find: '@vueuse/gesture',
        replacement: resolve(
          fileURLToPath(import.meta.url),
          '../../src/index.ts',
        ),
      },
    ],
  },
})
