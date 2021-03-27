import { Directive, DirectiveBinding, VNode } from 'vue-demi'

export const directive = (): Directive<HTMLElement | SVGElement> => {
  const register = (
    el: HTMLElement | SVGElement,
    binding: DirectiveBinding,
    node: VNode<
      any,
      HTMLElement | SVGElement,
      {
        [key: string]: any
      }
    >,
  ) => {}

  const unregister = (
    el: HTMLElement | SVGElement,
    binding: DirectiveBinding,
    node: VNode<
      any,
      HTMLElement | SVGElement,
      {
        [key: string]: any
      }
    >,
  ) => {}

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
