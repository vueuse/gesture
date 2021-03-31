# Gesture Options

Every **gestures** can be **configured** with different **options**.

Some **options** are **generic** and some are **specific** to gestures.

Those distinctions are **described** on their **gesture** pages.

## Configuration

Depending on whether you use **gesture-specific** hooks, [**useGesture**](/use-gesture) hook or [**Directives**](/directives), you'll need to **structure** the config **options** object **differently**.

```vue
<template>
    <div v-drag="dragHandler" :drag-options="dragOptions">
</template>

<script setup>
// When you use a gesture-specific hook
useDrag(state => doSomething(state), { ...genericOptions, ...dragOptions })

// When you use the useGesture hook
useGesture(state => doSomething(state), {
  // Global options such as `domTarget`
  ...genericOptions,
  // Gesture specific options
  drag:   dragOptions,
  wheel:  wheelOptions,
  pinch:  pinchOptions,
  scroll: scrollOptions,
  wheel:  wheelOptions,
  hover:  hoverOptions,
})

// When you use gesture-specific directive
const dragOptions = { ...genericOptions, ...dragOptions }

const dragHandler = (gestureState) => doSomething(gestureState)
</script>
```

## Generic options

### `domTarget`

Lets you specify a **DOM Element** or **Vue Component** `ref()` you want to attach the gesture to.

This is pre-filled when using directives, you don't have to specify that option.

- Default: `undefined`

### `eventOptions`

When **capture** is set to **true**, events will be [**captured**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture).

**passive** sets whether events are [**passive**](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).

- Default: `{ capture: false, passive: true }`

### `window`

Lets you **specify** which **window** element the **gesture** should bind events to.

Only relevant for the **drag** gesture.

- Default: `window`

### `enabled`

When set to false none of your handlers will be fired.

- Default: `true`
