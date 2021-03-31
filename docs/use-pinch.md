# Pinch

<PinchExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-pinch="pinchHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Integration" page

const pinchHandler = ({ offset: [d, a], pinching }) => {
  set({ zoom: d, rotateZ: a })
}

// Composable usage
usePinch(pinchHandler, {
  domTarget: demoBox,
  eventOptions: {
    passive: true,
  },
})
</script>
```
