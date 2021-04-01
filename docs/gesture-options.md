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

## Generic Options

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

When **set** to **false** none of your **handlers** will be **fired**.

- Default: `true`

### `initial`

The initial position movement should start from.

- Default: `[0, 0]`

### `threshold`

Threshold is the **minimum** displacement the **gesture** movement **needs** to travel **before** your handler is **fired**.

- Default: `[0, 0]`

### triggerAllEvents

**Forces** the **handler** to **fire** even for **non intentional** displacement (**ignores** the **threshold**).

In that case, the **intentional** attribute from state will **remain false** until the **threshold** is **reached**.

## XY Options

Note that **xy gestures** refers to coordinates-based gesture:

- [**Drag**](/use-drag)
- [**Move**](/use-move)
- [**Wheel**](/use-wheel)
- [**Scroll**](/use-scroll)

Additionals options specific to [**drag**](/use-drag) and [**pinch**](/use-pinch) are described on their respective pages.

### `axis`

Axis makes it **easy** to **constraint** the user **gesture** to a specific **axis**.

- Accepts: `x`, `y`, `undefined`

- Default: `undefined`

### `lockDirection`

Lock direction **allows** you to **lock** the **movement** of the gesture **once** a **direction** has been **detected**.

- Default: `false`

### `bounds`

Bounds option will **constraint** the user **gesture**.

**Both** the gesture **movement** and **offset** will be **clamped** to the specified **bounds**.

- Accepts:

  1. `Bounds: { top?: number, bottom?: number, left?: number, right?: number }`
  2. `(gestureState) => Bounds`

- Default: `{ top: -Infinity, bottom: Infinity, left: -Infinity, right: Infinity }`

### `transform`

When **interacting** with **canvas** objects, dealing with **space** coordinates that are **not measured** in **pixels** can be **hard**.

Note that [**bounds**](#bounds) or [**initial**](#initial) values are **expected** to be **expressed** in the **new** space **coordinates**.

Only [**threshold**](#thresold) always **refers** to **screen pixel values**.

- Accepts: `(xy: Vector2) => Vector2`

- Default: `undefined`
