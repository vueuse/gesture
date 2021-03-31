# Wheel

Use your mouse **wheel** or **trackpad**.

Both **axis** and **velocity** are **supported**.

<WheelExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-wheel="scrollHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Integration" page

const wheelHandler = ({ movement: [x, y], wheeling }) => {
  if (!wheeling) {
    set({
      x: 0,
      y: 0,
    })

    return
  }

  set({
    y,
    x,
  })
}

// Composable usage
useWheel(wheelHandler, {
  domTarget: demo,
})
</script>
```
