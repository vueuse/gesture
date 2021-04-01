# Motion Integration

**Gesture support** is often **coupled** with some **spring physics** animation system.

It **allows** the **gesture animations** to feel **smoother**, and more "**organic**".

The original library, [**react-use-gesture**](https://use-gesture.netlify.app/), uses their own solution called [**react-spring**](https://www.react-spring.io).

Luckily, [**I**](https://twitter.com/yaeeelglx) also made [**@vueuse/motion**](https://motion.vueuse.org) that **provides** a set of **composables** that plays well with **@vueuse/gesture**.

## What is `set()` ?

Looking at the **code examples**, you might have **noticed** a **function** called `set()`.

The `set()` function comes from the [**useSpring**](https://motion.vueuse.org/api/use-spring.html) composable from [**@vueuse/motion**](https://motion.vueuse.org).

[**useSpring**](https://motion.vueuse.org/api/use-spring.html) used with [**useMotionProperties**](https://motion.vueuse.org/api/use-motion-properties.html) is a powerful combination when it comes to animate elements.

```javascript
// Get the element.
const demoElement = ref()

// Bind to the element or component reference
// and init style properties that will be animated.
const { motionProperties } = useMotionProperties(demoElement, {
  cursor: 'grab',
  x: 0,
  y: 0,
})

// Bind the motion properties to a spring reactive object.
const { set } = useSpring(motionProperties)

// Animatable values will be animated, the others will be changed immediately.
const eventHandler = () => set({ x: 250, y: 200, cursor: 'default' })
```

## Directives support

Using [**useSpring**](https://motion.vueuse.org/api/use-spring.html) with [**useMotionProperties**](https://motion.vueuse.org/api/use-motion-properties.html) allows **low level** data manipulations.

If you are already using [**@vueuse/motion**](https://motion.vueuse.org), you might be familiar with [**Directive Usage**](https://motion.vueuse.org/directive-usage.html).

Here is a **nice example** of combining `v-motion` with `v-drag`:

```vue
<template>
    <div
        v-motion="'demo'"
        v-drag="dragHandler"
    >
</template>

<script setup>
import { useMotions } from '@vueuse/motion'

// Get motions
const motions = useMotions()

// Drag handler
const handler = ({ movement: [x, y], dragging }) => {
  // Check element existence
  if (!motions.demo) return

  // Reset the box at initial position
  if (!dragging) {
    motions.demo.apply({
      x: 0,
      y: 0,
    })

    return
  }

  // Apply movement values
  motions.demo.apply({
    x,
    y,
  })
}
</script>
```
