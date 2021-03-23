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
</script>

<style lang="postcss" scoped></style>
