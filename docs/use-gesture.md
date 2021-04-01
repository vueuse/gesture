# Gestures

**useGesture** is a **composable** that allows you to manage **different** gestures at **once**.

```javascript
useGesture(
  {
    onDrag: (state) => doSomething(state),
    onDragStart: (state) => doSomething(state),
    onDragEnd: (state) => doSomething(state),
    onPinch: (state) => doSomething(state),
    onPinchStart: (state) => doSomething(state),
    onPinchEnd: (state) => doSomething(state),
    onScroll: (state) => doSomething(state),
    onScrollStart: (state) => doSomething(state),
    onScrollEnd: (state) => doSomething(state),
    onMove: (state) => doSomething(state),
    onMoveStart: (state) => doSomething(state),
    onMoveEnd: (state) => doSomething(state),
    onWheel: (state) => doSomething(state),
    onWheelStart: (state) => doSomething(state),
    onWheelEnd: (state) => doSomething(state),
    onHover: (state) => doSomething(state),
  },
  config,
)
```

## Configuration

As described on [**Gesture Options**](/gesture-options) page, **useGesture** config allows you to **define options** for **each** type of **event**.

```javascript
// When you use the useGesture hook
useGesture((state) => doSomething(state), {
  // Global options such as `domTarget`
  ...genericOptions,
  // Gesture specific options
  drag: dragOptions,
  wheel: wheelOptions,
  pinch: pinchOptions,
  scroll: scrollOptions,
  wheel: wheelOptions,
  hover: hoverOptions,
})
```

## Example

A nice **usage example** can be found [**here**](https://vueuse-gesture-demo.netlify.app).

The **code** from this **example** is [**here**](https://github.com/vueuse/gesture/blob/main/demo/src/components/MultiGesture.vue).
