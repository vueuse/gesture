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
import { useScroll } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'
import { interpolate } from 'popmotion'

const demoBox = ref()
let boxHeight = 0
const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  backgroundColor: '#0000FF',
})

const mapper = interpolate([0, 50, 100], ['#0000FF', '#00FF00', '#FF0000'])

const { set } = useSpring(motionProperties, {
  damping: 30,
  stiffness: 320,
})

useScroll(
  ({ xy: [x, y], ...state }) => {
    set({
      backgroundColor: mapper((y / boxHeight) * 100),
    })
  },
  {
    domTarget: demoBox,
  },
)

onMounted(() => {
  boxHeight = demoBox.value.scrollHeight - 320

  console.log(boxHeight)
})
</script>

<style lang="postcss" scoped>
.demo-box {
  align-items: start;
  overflow-y: scroll;
}

.demo-element {
  height: 300vh;
  border-radius: 0;
}
</style>
