# 🕹 @vueuse/gesture

**Vue Composables** making your app **interactive**

- 🚀 **Plug** & **play**
- 🕹 **Mouse** & **Touch** support
- 🤹 **Smooth motions** provided by [**vueuse/motion**](https://github.com/vueuse/motion)
- ✨ Written in **TypeScript**
- ✅ Supports **Vue 2 & 3** using [**vue-demi**](https://github.com/antfu/vue-demi)

[🌍 **Documentation**](https://gesture.vueuse.org)

[👀 **Demos**](https://vueuse-gesture-demo.netlify.app)

## Quick Start

Let's **get started** quickly by **installing** the **package** and adding the **plugin**.

From your **terminal**:

```bash
yarn add @vueuse/gesture
```

In your **Vue** app **entry** file:

```javascript
import { createApp } from 'vue'
import { GesturePlugin } from '@vueuse/gesture'
import App from './App.vue'

const app = createApp(App)

app.use(GesturePlugin)

app.mount('#app')
```

You can now **interact** with any of your **component**, **HTML** or **SVG** elements using `v-drag` or any other **directive**.

```vue
<template>
  <div v-drag="dragHandler" />
</template>

<script lang="ts">
const dragHandler = (dragState) => {
  // Do something with dragState
}
</script>
```

To see more about the **gestures** events **data**, check out [**Gesture State**](https://gesture.vueuse.org/gesture-state.html).

To see more about the **gestures** options, check out [**Gesture Options**](https://gesture.vueuse.org/gesture-options.html).

Also, here is a list of the available gestures:

- [**Drag**](https://gesture.vueuse.org/use-drag.html)
- [**Move**](https://gesture.vueuse.org/use-move.html)
- [**Hover**](https://gesture.vueuse.org/use-hover.html)
- [**Scroll**](https://gesture.vueuse.org/use-scroll.html)
- [**Wheel**](https://gesture.vueuse.org/use-wheel.html)
- [**Pinch**](https://gesture.vueuse.org/use-pinch.html)

## Credits

This package is a **fork** [**react-use-gesture**](https://github.com/pmndrs/react-use-gesture) by [**pmndrs**](https://github.com/pmndrs).

If you **like** this package, consider **following me** on [**GitHub**](https://github.com/Tahul) and on [**Twitter**](https://twitter.com/yaeeelglx).

👋
