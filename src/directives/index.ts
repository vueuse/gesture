import { useDrag } from '../composables/useDrag'
import { useHover } from '../composables/useHover'
import { useMove } from '../composables/useMove'
import { usePinch } from '../composables/usePinch'
import { useScroll } from '../composables/useScroll'
import { useWheel } from '../composables/useWheel'
import { directive, DirectiveHook } from './directive'

const errorMessage = (type: string) =>
  `Your v-${type} directive must have a handler specified as a value`

// v-drag
export const drag = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('drag'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = useDrag(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.drag = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.drag) return

    el.gestures.drag.clean()
  }

  return directive(register, unregister)
}

// v-move
export const move = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('move'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = useMove(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.move = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.move) return

    el.gestures.move.clean()
  }

  return directive(register, unregister)
}

// v-hover
export const hover = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('hover'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = useHover(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.hover = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.hover) return

    el.gestures.hover.clean()
  }

  return directive(register, unregister)
}

// v-pinch
export const pinch = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('pinch'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = usePinch(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.pinch = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.pinch) return

    el.gestures.pinch.clean()
  }

  return directive(register, unregister)
}

// v-wheel
export const wheel = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('wheel'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = useWheel(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.wheel = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.wheel) return

    el.gestures.wheel.clean()
  }

  return directive(register, unregister)
}

// v-scroll
export const scroll = () => {
  const register: DirectiveHook = (el, binding, node) => {
    if (!binding.value) {
      throw new Error(errorMessage('scroll'))
    }

    if (!el.gestures) {
      el.gestures = {}
    }

    const controller = useScroll(binding.value, {
      domTarget: el,
      manual: true,
      ...binding.arg as {}
    })

    controller.bind()

    el.gestures.drag = controller
  }

  const unregister: DirectiveHook = (el, binding, node) => {
    if (!el.gestures || !el.gestures.drag) return

    el.gestures.drag.clean()
  }

  return directive(register, unregister)
}
