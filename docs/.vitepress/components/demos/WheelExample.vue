<template>
  <div ref="demoBox" class="demo-box">
    <div ref="demoElement" class="demo-element" />
  </div>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useWheel } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const interacting = inject('interacting')
const demoBox = ref()
const demoElement = ref()

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

      interacting.value = false

      return
    }

    interacting.value = true

    set({
      y,
      x,
    })
  },
  {
    domTarget: demoBox,
  },
)
</script>

<style lang="postcss" scoped>
.demo-box {
  overflow: hidden;
}
</style>
