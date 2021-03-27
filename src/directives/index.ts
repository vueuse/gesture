import { Directive, DirectiveBinding, VNode } from 'vue-demi'

export type DirectiveHook = (
  el: HTMLElement | SVGElement,
  binding: DirectiveBinding,
  node: VNode<
    any,
    HTMLElement | SVGElement,
    {
      [key: string]: any
    }
  >,
) => void

export const directive = (
  register: DirectiveHook,
  unregister: DirectiveHook,
): Directive<HTMLElement | SVGElement> => {
  return {
    // Vue 3 Directive Hooks
    created: register,
    unmounted: unregister,
    // Vue 2 Directive Hooks
    // @ts-expect-error
    bind: register,
    unbind: unregister,
  }
}

// v-drag
export const dragDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}

// v-move
export const moveDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}

// v-hover
export const hoverDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}

// v-pinch
export const pinchDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}

// v-wheel
export const wheelDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}

// v-scroll
export const scrollDirective = () => {
  const register: DirectiveHook = () => {}

  const unregister: DirectiveHook = () => {}

  return directive(register, unregister)
}
