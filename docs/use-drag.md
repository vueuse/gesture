# Drag

Drag the box.

<DragExample />

```vue
<template>
  <!-- Directive usage -->
  <div ref="demo" v-drag="dragHanlder" />
</template>

<script setup>
const demo = ref()

// Find more about `set()` on the "Motion Integration" page

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

## State

In addition to regular [**Gesture Options**](/gesture-options), the drag gesture adds few attributes.

```javascript
useDrag(({ swipe, tap }) => doSomething(swipe, tap))
```

### `swipe`

Swipe is a convenient state attribute for the gesture that will help you detect swipes.

Swipe is a vector which both components are either -1, 0 or 1.

The component stays to 0 until a swipe is detected.

1 or -1 indicates the direction of the swipe.

Left or right on the horizontal axis, top or bottom on the vertical axis.

### `tap`

Tap is a boolean for the gesture that will be true if the gesture can be assimilated to a tap or click.

Usually tap is used with the [**filterTaps**](#filterTaps) option.

## Options

### `filterTaps`

If true, the component won't trigger your drag logic if the user just clicked on the component.

### `preventWindowScrollY`

If true, drag will be triggered after 250ms and will prevent window scrolling.

### `useTouch`

Most gestures, drag included, use pointer events.

This works well 99% of the time, but pointer events get canceled on touch devices when the user starts scrolling.

Usually this is what you actually want, and the browser does it for you.

But in some situations you may want the drag to persist while scrolling.

In that case you'll need to indicate @vueuse/gesturee to use touch events, which aren't canceled on scroll.

### `delay`

If set, the handler will be delayed for the duration of the delay (in ms) — or if the user starts moving.

When set to true, delay is defaulted to 180ms.

Note: delay and threshold don't play well together (without moving your pointer, your handler will never get triggered).

### `swipeDistance`

The minimum distance per axis (in pixels) the gesture needs to travel to trigger a swipe.

### `swipeVelocity`

The minimum velocity per axis (in pixels / ms) the gesture needs to reach before the pointer is released.

### `swipeDuration`

The maximum duration in milliseconds that a swipe is detected.
