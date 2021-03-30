# Move

<MoveExample />

```javascript
import { ref, onMounted } from 'vue'
import { useMove } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()
let boxRect = {}

const { motionProperties } = useMotionProperties(demoElement, {
  x: 1,
  y: 1,
})

const { set } = useSpring(motionProperties, {
  damping: 5,
  stiffness: 400,
})

useMove(
  ({ event, moving, ...state }) => {
    const x = event.pageX - boxRect.left - boxRect.width / 2
    const y = event.pageY - boxRect.top - boxRect.height / 2

    set({
      x,
      y,
    })
  },
  {
    domTarget: demoBox,
  },
)

onMounted(() => {
  boxRect = demoBox.value.getBoundingClientRect()
})
```
