<template>
  <div
    ref="joystick"
    class="w-32 h-32 bg-blue-400 rounded-lg border-4 border-blue-600 cursor-grab"
  />
</template>

<script setup lang="ts">
import { useDrag } from '@vueuse/gesture'
import { useSpring } from '@vueuse/motion'
import { ref } from 'vue'

const joystick = ref<HTMLElement>()

const { set } = useSpring(joystick, {
  damping: 50,
  stiffness: 1000,
})

useDrag(
  ({ movement: [x, y], dragging }) => {
    if (!dragging) {
      set({
        cursor: 'grab',
        x: 0,
        y: 0,
      })

      return
    }

    set({
      cursor: 'grabbing',
      x,
      y,
    })
  },
  {
    domTarget: joystick,
  },
)
</script>
