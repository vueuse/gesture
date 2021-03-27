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
import { useHover } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()
const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  backgroundColor: 'blue',
})

const { set } = useSpring(motionProperties, {
  damping: 30,
  stiffness: 320,
})

useHover(
  ({ hovering }) => {
    if (hovering) set({ backgroundColor: 'red' })
    else set({ backgroundColor: 'blue' })
  },
  { domTarget: demoElement },
)
</script>

<style lang="postcss" scoped>
.demo-element {
  background-color: blue;
}
</style>
