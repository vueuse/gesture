import Controller from '../Controller'

// Global compile-time constants
declare var __DEV__: boolean
declare var __BROWSER__: boolean
declare var __CI__: boolean

type GestureHandlersMap = {
  drag?: Controller
  hover?: Controller
  move?: Controller
  pinch?: Controller
  scroll?: Controller
  wheel?: Controller
  [key: string]: Controller
}

declare global {
  interface HTMLElement {
    gestures?: GestureHandlersMap
  }

  interface SVGElement {
    gestures?: GestureHandlersMap
  }
}
