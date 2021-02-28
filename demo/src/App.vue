<template>
  <div>
    <input
      type="checkbox"
      :value="toggleable ? 'checked' : 'unchecked'"
      @change="toggle"
    />
    Current value is: {{ toggleable }}
  </div>
</template>

<script lang="ts">
import { useToggle } from '@lib'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const [toggleable, toggle] = useToggle()

    return {
      toggleable,
      toggle,
    }
  },
})
</script>
