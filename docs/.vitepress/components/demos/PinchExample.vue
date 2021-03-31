<template>
  <div ref="demoBox" class="demo-box">
    <div ref="demoElement" class="demo-element" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, reactive, inject } from 'vue'
import { usePinch, useHover } from '@vueuse/gesture'
import { useMotionProperties, useSpring } from '@vueuse/motion'
import { interpolate } from 'popmotion'

const interacting = inject('interacting')
const demoBox = ref()
const demoElement = ref()

const { motionProperties } = useMotionProperties(demoElement, {
  x: 0,
  y: 0,
})

const springValues = reactive({ zoom: 0, rotateZ: 0 })

const { set, values } = useSpring(springValues)

const mapper = interpolate([-2000, 0, 2000], [0.25, 1, 4], { clamp: true })

// Cast values
watch(
  springValues,
  (newVal) => {
    Object.assign(motionProperties, {
      rotateZ: newVal.rotateZ,
      scale: mapper(newVal.zoom),
    })
  },
  {
    deep: true,
  },
)

usePinch(
  ({ offset: [d, a], pinching }) => {
    set({ zoom: d, rotateZ: a })
  },
  {
    domTarget: demoBox,
    eventOptions: {
      passive: true,
    },
  },
)

// Disable viewport pinch zoom on whole app

const cancelEvent = (e) => e.preventDefault()

useHover(
  ({ hovering }) => {
    if (!hovering) {
      window.removeEventListener('wheel', cancelEvent, { passive: false })
      document.removeEventListener('gesturestart', cancelEvent)
      document.removeEventListener('gesturechange', cancelEvent)
      interacting.value = false
      return
    }

    window.addEventListener('wheel', cancelEvent, { passive: false })
    document.addEventListener('gesturestart', cancelEvent)
    document.addEventListener('gesturechange', cancelEvent)
    interacting.value = true
  },
  {
    domTarget: demoBox,
  },
)
</script>
