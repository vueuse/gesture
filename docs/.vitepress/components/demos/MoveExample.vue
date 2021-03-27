<template>
  <div>
    <div ref="demoBox" class="demo-box">
      <div ref="demoElement" class="demo-element" />
    </div>

    <div class="demo-code"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMove, useHover } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()
let boxRect = {}
const demoElement = ref()

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
</script>

<style lang="postcss" scoped>
.demo-box {
  overflow: hidden;
}

.demo-element {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>
