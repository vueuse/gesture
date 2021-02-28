<template>
  <div>
    <div class="flex items-center justify-center">
      <h1 class="m-6 text-4xl font-bold cursor-pointer select-none">
        🕹&nbsp;@vueuse/gesture
      </h1>
    </div>

    <div class="flex items-center justify-center">
      <Joystick />
    </div>

    <div class="flex flex-col items-center justify-center">
      <a class="mt-12 mb-6" href="https://github.com/vueuse/motion">
        ↩️&nbsp;&nbsp;Bring me back to GitHub
      </a>

      <p class="mb-6 text-center">
        This package has been written by
        <a href="https://twitter.com/yaeeelglx" target="_blank">
          Yaël Guilloux
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Joystick from './components/Joystick.vue'
</script>

<style lang="postcss" scoped>
a {
  @apply font-bold transition-colors duration-100 hover:text-blue-400;
}
</style>
