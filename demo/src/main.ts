import { GesturePlugin } from '@vueuse/gesture'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'
import 'windi.css'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(MotionPlugin)

app.use(GesturePlugin)

app.mount('#app')
