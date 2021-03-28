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
