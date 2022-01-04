import { MotionPlugin } from '@vueuse/motion'
import DefaultTheme from 'vitepress/dist/client/theme-default'
import DragExample from '../components/demos/DragExample.vue'
import GesturesExample from '../components/demos/GesturesExample.vue'
import HoverExample from '../components/demos/HoverExample.vue'
import MoveExample from '../components/demos/MoveExample.vue'
import PinchExample from '../components/demos/PinchExample.vue'
import ScrollExample from '../components/demos/ScrollExample.vue'
import WheelExample from '../components/demos/WheelExample.vue'
import Features from '../components/Features.vue'
import Hero from '../components/Hero.vue'
import Illustration from '../components/Illustration.vue'
import Layout from '../components/Layout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Plugins
    app.use(MotionPlugin)

    // Components
    app.component('Features', Features)
    app.component('Hero', Hero)
    app.component('Illustration', Illustration)
    app.component('DragExample', DragExample)
    app.component('MoveExample', MoveExample)
    app.component('PinchExample', PinchExample)
    app.component('ScrollExample', ScrollExample)
    app.component('WheelExample', WheelExample)
    app.component('GesturesExample', GesturesExample)
    app.component('HoverExample', HoverExample)
  },
}
