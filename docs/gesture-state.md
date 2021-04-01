# Gesture State

Every time a **gesture handler** is called, it will get passed a **gesture state** that includes the **source event** and adds multiple **attributes** such as **velocity**, previous value, and much **more**.

States structure doesn't vary much across different gestures, the only distinction comes from [**usePinch**](/use-pinch) and [**useDrag**](/use-drag).

Those distinctions are described on their gesture pages.

## Attributes

With the exception of **xy** and **vxvy**, all the attributes below are common to all gestures.

```javascript
useXXXX(state => {
  const {
    event,       // the source event
    xy,          // [x,y] values (pointer position or scroll offset)
    vxvy,        // momentum of the gesture per axis
    previous,    // previous xy
    initial,     // xy value when the gesture started
    intentional, // is the movement intentional -- new in v8
    movement,    // last gesture offset (xy - initial)
    delta,       // movement delta (movement - previous movement)
    offset,      // offset since the first gesture
    lastOffset,  // offset when the last gesture started
    velocity,    // absolute velocity of the gesture
    distance,    // offset distance
    direction,   // direction per axis
    startTime,   // gesture start time
    elapsedTime, // gesture elapsed time
    timeStamp,   // timestamp of the event
    first,       // true when it's the first event
    last,        // true when it's the last event
    active,      // true when the gesture is active
    memo,        // value returned by your handler on its previous run
    cancel,      // function you can call to interrupt some gestures
    canceled,    // whether the gesture was canceled (drag and pinch)
    down,        // true when a mouse button or touch is down
    buttons,     // number of buttons pressed
    touches,     // number of fingers touching the screen
    args,        // arguments you passed to bind
    ctrlKey,     // true when control key is pressed
    altKey,      // "      "  alt     "      "
    shiftKey,    // "      "  shift   "      "
    metaKey,     // "      "  meta    "      "
    locked,      // whether document.pointerLockElement is set
    dragging,    // is the component currently being dragged
    moving,      // "              "              "  moved
    scrolling,   // "              "              "  scrolled
    wheeling,    // "              "              "  wheeled
    pinching     // "              "              "  pinched
  } = state
})
```