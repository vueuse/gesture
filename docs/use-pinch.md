# Pinch

**Pinch** the box.

Works best on **touch** devices, or using a laptop **trackpad**.

<PinchExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-pinch="pinchHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Motion Integration" page

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

## State

In addition to regular [**Gesture Options**](/gesture-options), the **pinch** gesture adds few attributes.

```javascript
usePinch((state) => {
  const {
    da, // [d,a] absolute distance and angle of the two pointers
    vdva, // momentum of the gesture of distance and rotation
    origin, // coordinates of the center between the two touch event
  } = state
})
```

## Options

### `distanceBounds`

**Limits** the **distance** for `movement` and `offset` to the specified **bounds**.

### `angleBounds`

**Limits** the **angle** for `movement` and `offset` to the specified **bounds**.
