# Drag

<DragExample />

```javascript
import { ref } from 'vue'
import { useDrag } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  cursor: 'grab',
  x: 0,
  y: 0,
})

const { set } = useSpring(motionProperties)

useDrag(
  ({ movement: [x, y], dragging }) => {
    if (!dragging) {
      set({ x: 0, y: 0, cursor: 'grab' })
      return
    }

    set({
      cursor: 'grabbing',
      x,
      y,
    })
  },
  {
    domTarget: demoElement,
  },
)
```
