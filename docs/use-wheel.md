# Wheel

<WheelExample />

```javascript
import { ref } from 'vue'
import { useWheel } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  x: 0,
  y: 0,
})

const { set } = useSpring(motionProperties)

useWheel(
  ({ movement: [x, y], wheeling }) => {
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
  },
  {
    domTarget: demoBox,
  },
)
```
