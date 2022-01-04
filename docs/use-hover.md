# Hover

Hover the box.

<HoverExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-hover="hoverHanlder" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Motion Integration" page

const hoverHandler = ({ hovering }) => {
  if (hovering) set({ backgroundColor: '#7344be', scale: 1.5 })
  else set({ backgroundColor: '#b164e7', scale: 1 })
}

// Composable usage
useHover(hoverHandler, { domTarget: demo })
</script>
```
