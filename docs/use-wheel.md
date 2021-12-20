# Wheel

Use your mouse **wheel** or **trackpad**.

Both **axis** and **velocity** are **supported**.

<WheelExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-wheel="wheelHandler" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Motion Integration" page

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

## Specificities

Mouse devices such as the **Macbook trackpad**, or the **Magic Mouse** have **inertia**

There is **no** native **way** to **distinguish** between an actual **wheel intent** and its **resulting inertia**.

To **detect** intent, you can use [**Lethargy**](https://github.com/d4nyll/lethargy).
