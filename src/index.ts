import { ref } from 'vue-demi'

/**
 * A simple toggler.
 *
 * @param [defaultValue=false]
 */
export const useToggle = (defaultValue: boolean = false) => {
  const toggleable = ref(defaultValue)

  const toggle = () => (toggleable.value = !toggleable.value)

  return [toggleable, toggle] as const
}
