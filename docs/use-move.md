# Move

**Move** inside the box.

<MoveExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-move="moveHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Integration" page

const moveHandler = ({ event, moving, ...state }) => {
  // boxRect is coming from the getBoundingClientRect() of the parent element.
  const x = event.pageX - boxRect.left - boxRect.width / 2
  const y = event.pageY - boxRect.top - boxRect.height / 2

  set({
    x,
    y,
  })
}

// Composable usage
useMove(moveHandler, {
  domTarget: demoBox,
})
</script>
```
