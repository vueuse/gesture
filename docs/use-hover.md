# Hover

<HoverExample />

```javascript
import { ref } from 'vue'
import { useHover } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  scale: 1,
  backgroundColor: '#b164e7',
})

const { set } = useSpring(motionProperties, {
  damping: 30,
  stiffness: 320,
})

useHover(
  ({ hovering }) => {
    if (hovering) set({ backgroundColor: '#7344be', scale: 1.5 })
    else set({ backgroundColor: '#b164e7', scale: 1 })
  },
  { domTarget: demoElement },
)
```
