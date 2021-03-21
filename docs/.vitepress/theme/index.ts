// @ts-nocheck
import { MotionPlugin } from '@vueuse/motion'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import Illustration from '../components/Illustration.vue'
import Layout from '../components/Layout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(MotionPlugin)

    app.component('Features', Features)

    app.component('Hero', Hero)

    app.component('Illustration', Illustration)
  },
}
