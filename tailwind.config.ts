import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'

defineConfig({
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        transparent: 'transparent',
        current: 'currentColor',
      },
    },
  },
})
