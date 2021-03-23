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
import { useMove, useHover, subV } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'

const demoBox = ref()
const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  x: 0,
  y: 0,
})

const { set } = useSpring(motionProperties)

useMove(
  ({ movement: [x, y], event, moving }) => {
    if (!moving) {
      set({
        x: 0,
        y: 0,
      })

      return
    }

    set({ x, y })
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

.demo-element {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}
</style>
