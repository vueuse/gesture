<template>
  <div>
    <div ref="demoBox" class="demo-box">
      <div ref="demoElement" class="demo-element" />
    </div>

    <div class="demo-code"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDrag } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()
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
</script>
