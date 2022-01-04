# Installation

Install `@vueuse/gesture` using your package manager of choice.

```bash
pnpm add @vueuse/gesture
```

Please note that if you are using **Vue 2** or **Nuxt**, you need to install the [**Composition API**](https://v3.vuejs.org/guide/composition-api-introduction.html).

The **required** packages can be found [**here for Vue 2**](https://github.com/vuejs/composition-api), and [**here for Nuxt**](https://composition-api.nuxtjs.org/).

## Plugin Installation

If you are planning on using the directives (`v-drag`, `v-move`, ...) from this package, you might want to add the plugin to your Vue instance.

### Global Installation

You can add the support for directives globally, by installing the plugin.

```javascript
import { GesturePlugin } from '@vueuse/gesture'

const app = createApp(App)

app.use(GesturePlugin)

app.mount('#app')
```

### Component Installation

If you want to import the directive code only from components that uses it, import the directive and install it at component level.

```javascript
import { dragDirective } from '@vueuse/gesture'

export default {
  directives: {
    drag: dragDirective,
  },
}
```
