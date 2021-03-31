# Drag

**Drag** the box.

<DragExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-drag="dragHanlder" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Integration" page

const dragHandler = ({ movement: [x, y], dragging }) => {
  if (!dragging) {
    set({ x: 0, y: 0, cursor: 'grab' })
    return
  }

  set({
    cursor: 'grabbing',
    x,
    y,
  })
}

// Composable usage
useDrag(dragHandler, {
  domTarget: demo,
})
</script>
```
