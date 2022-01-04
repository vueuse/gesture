# Quick Start

Let's get started quickly by installing the package and adding the plugin.

From your terminal:

```bash
pnpm add @vueuse/gesture
```

In your Vue app entry file:

```javascript
import { createApp } from 'vue'
import { GesturePlugin } from '@vueuse/gesture'
import App from './App.vue'

const app = createApp(App)

app.use(GesturePlugin)

app.mount('#app')
```

You can now interact with any of your component, **HTML** or **SVG** elements using `v-drag` or any other directive.

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

To see more about the gestures event data, check out [**Gesture State**](/gesture-state).

To see more about the drag gesture, check out [**useDrag**](/use-drag) page.
