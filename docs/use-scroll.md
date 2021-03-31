# Scroll

Scroll the box.

<ScrollExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-scroll="scrollHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` and `mapper()` on the "Integration" page

const scrollHandler = ({ xy: [x, y], ...state }) => {
  set({
    backgroundColor: mapper((y / boxHeight) * 100),
  })
}

// Composable usage
useScroll(scrollHandler, {
  domTarget: demoBox,
})
</script>
```
