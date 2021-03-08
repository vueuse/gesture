<template>
  <!--<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="256px"
    height="256px"
  >
    <defs>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTa"
        x1="23.743"
        x2="26.198"
        y1="21.781"
        y2="21.781"
        data-name="Безымянный градиент 97"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".142" stop-color="#5c5c5c" />
        <stop offset=".508" stop-color="#fff" />
        <stop offset="1" stop-color="#343434" />
      </linearGradient>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTc"
        x1="24.23"
        x2="24.032"
        y1="53.599"
        y2="35.895"
        data-name="Безымянный градиент 14"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6edfff" />
        <stop offset=".307" stop-color="#43afe3" />
        <stop offset=".615" stop-color="#1f85ca" />
        <stop offset=".855" stop-color="#086bbc" />
        <stop offset="1" stop-color="#0062b6" />
      </linearGradient>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTd"
        x1="23.861"
        x2="24.257"
        y1="26.732"
        y2="44.633"
        data-name="Безымянный градиент 50"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#6edfff" />
        <stop offset="1" stop-color="#0062b6" />
      </linearGradient>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTe"
        x1="25"
        x2="25"
        y1="25.758"
        y2="31.122"
        data-name="Безымянный градиент 239"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#1d1d1d" />
        <stop offset=".628" stop-color="#4a4a4a" />
        <stop offset="1" />
      </linearGradient>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTf"
        x1="16.484"
        x2="32.973"
        y1="31.5"
        y2="31.5"
        data-name="Безымянный градиент 304"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".086" stop-color="#343434" />
        <stop offset=".245" stop-color="#cacaca" />
        <stop offset=".341" stop-color="#5c5c5c" />
        <stop offset=".704" stop-color="#8e8e8e" />
        <stop offset=".806" stop-color="#343434" />
        <stop offset="1" stop-color="gray" />
      </linearGradient>
      <linearGradient
        id="xQx3XT2hq1~NP885R5MTTg"
        x1="5.869"
        x2="14.506"
        y1="30.968"
        y2="31.034"
        data-name="Безымянный градиент 307"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#8d0000" />
        <stop offset=".382" stop-color="#c80009" />
        <stop offset="1" stop-color="#760000" />
      </linearGradient>
      <radialGradient
        id="xQx3XT2hq1~NP885R5MTTb"
        cx="24.129"
        cy="6.849"
        r="8.682"
        data-name="Безымянный градиент 207"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#ff656c" />
        <stop offset=".077" stop-color="#ff5c63" />
        <stop offset=".205" stop-color="#ff4449" />
        <stop offset=".367" stop-color="#ff1e20" />
        <stop offset=".478" stop-color="red" />
        <stop offset=".55" stop-color="#f40000" />
        <stop offset=".675" stop-color="#d80000" />
        <stop offset=".837" stop-color="#ab0000" />
        <stop offset="1" stop-color="#760000" />
      </radialGradient>
    </defs>
    <path
      fill="url(#xQx3XT2hq1~NP885R5MTTa)"
      d="M23.743,14.5H26.2a0,0,0,0,1,0,0V27.856a1.2,1.2,0,0,1-1.2,1.2h-.051a1.2,1.2,0,0,1-1.2-1.2V14.5A0,0,0,0,1,23.743,14.5Z"
    />
    <circle
      ref="joystick"
      cx="24.971"
      cy="8.653"
      r="6.735"
      fill="url(#xQx3XT2hq1~NP885R5MTTb)"
      style="cursor: pointer"
    />
    <path
      fill="url(#xQx3XT2hq1~NP885R5MTTc)"
      d="M40.587,45H7.413A2.622,2.622,0,0,1,4.8,42.6Q4.4,37.8,4,33H44q-.4,4.8-.8,9.595A2.622,2.622,0,0,1,40.587,45Z"
    />
    <path
      fill="url(#xQx3XT2hq1~NP885R5MTTd)"
      d="M44,34H4a1,1,0,0,1,0-2H44a1,1,0,0,1,0,2Z"
    />
    <rect
      width="14"
      height="4"
      x="18"
      y="28"
      fill="url(#xQx3XT2hq1~NP885R5MTTe)"
      rx="2"
    />
    <path
      fill="url(#xQx3XT2hq1~NP885R5MTTf)"
      d="M32.5,32h-15a.5.5,0,0,1,0-1h15a.5.5,0,0,1,0,1Z"
    />
    <rect
      width="6"
      height="2"
      x="7"
      y="30"
      fill="url(#xQx3XT2hq1~NP885R5MTTg)"
    />
  </svg>-->

  <div
    ref="joystick"
    class="w-32 h-32 bg-blue-400 rounded-lg border-4 border-blue-600"
  />
</template>

<script setup lang="ts">
import { useDrag } from '@vueuse/gesture'
import { useMotion } from '@vueuse/motion'
import { ref } from 'vue'

const joystick = ref<HTMLElement>()

const instance = useMotion(joystick, {
  initial: {
    opacity: 0,
    y: 200,
  },
  enter: {
    y: 0,
    opacity: 1,
    scale: 1,
  },
})

useDrag(
  ({ movement: [x, y], dragging, event }) => {
    if (event.pointerType === 'touch') {
      instance.set({ x, y })
    } else {
      instance.apply({
        x,
        y,
      })
    }

    if (!dragging) instance.apply({ x: 0, y: 0 })
  },
  {
    domTarget: instance.target,
  },
)
</script>
