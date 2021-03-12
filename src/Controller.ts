import {
  EventHandlers,
  EventHandlersKey,
  Fn,
  GestureTarget,
  InternalConfig,
  InternalHandlers,
  RecognizerClass,
  State,
  StateKey,
} from './types'
import {
  getTouchIds,
  supportsGestureEvents,
  supportsTouchEvents,
} from './utils/event'
import { getInitialState } from './utils/state'
import { chainFns } from './utils/utils'

/**
 * The controller will keep track of the state for all gestures and also keep
 * track of timeouts, and window listeners.
 */
export default class Controller {
  public nativeRefs!: any
  public config!: InternalConfig
  public handlers!: InternalHandlers
  public state: State // state for all gestures
  public timeouts: { [stateKey in StateKey]?: number } // tracks timeouts of debounced gestures
  public domListeners: [string, Fn][] // when config.domTarget is set, we attach events directly to the dom
  public windowListeners: { [stateKey in StateKey]?: [string, Function][] } // keeps track of window listeners added by gestures (drag only at the moment)

  public pointerIds = new Set<number>() // register Pointer Events pointerIds
  public touchIds = new Set<number>() // register Touch Events identifiers
  public supportsTouchEvents = supportsTouchEvents()
  public supportsGestureEvents = supportsGestureEvents()

  constructor(private classes: Set<RecognizerClass>) {
    this.classes = classes
    this.state = getInitialState()
    this.timeouts = {}
    this.domListeners = []
    this.windowListeners = {}
  }

  public bind = (...args: any[]) => {
    const bindings: { [key: string]: Function[] } = {}

    for (let RecognizerClass of this.classes)
      new RecognizerClass(this, args).addBindings(bindings)

    // // we also add event bindings for native handlers
    for (let eventKey in this.nativeRefs) {
      addBindings(bindings, eventKey, (event: any) =>
        this.nativeRefs[eventKey]({ ...this.state.shared, event, args }),
      )
    }

    if (this.config.domTarget) {
      // If config.domTarget is set we add event listeners to it and return the clean function.
      return updateDomListeners(this, bindings)
    } else {
      // If not, we return an object that contains gesture handlers mapped to react handler event keys.
      return getPropsListener(this, bindings)
    }
  }

  /**
   * Function ran on component unmount: cleans timeouts and removes dom listeners set by the bind function.
   */
  public clean = (): void => {
    const { eventOptions, domTarget } = this.config

    if (domTarget && domTarget.value)
      removeListeners(domTarget.value, takeAll(this.domListeners), eventOptions)

    Object.values(this.timeouts).forEach(clearTimeout)

    clearAllWindowListeners(this)
  }
}

export function addEventIds(
  controller: Controller,
  event: TouchEvent | PointerEvent,
) {
  if ('pointerId' in event) {
    controller.pointerIds.add(event.pointerId)
  } else {
    controller.touchIds = new Set(getTouchIds(event))
  }
}

export function removeEventIds(
  controller: Controller,
  event: TouchEvent | PointerEvent,
) {
  if ('pointerId' in event) {
    controller.pointerIds.delete(event.pointerId)
  } else {
    getTouchIds(event).forEach((id) => controller.touchIds.delete(id))
  }
}

export function clearAllWindowListeners(controller: Controller) {
  const {
    config: { window: el, eventOptions },
    windowListeners,
  } = controller
  if (!el || !el.value) return

  for (let stateKey in windowListeners) {
    const handlers = windowListeners[stateKey as StateKey]
    removeListeners(el.value, handlers, eventOptions)
  }

  controller.windowListeners = {}
}

export function clearWindowListeners(
  { config, windowListeners }: Controller,
  stateKey: StateKey,
  options = config.eventOptions,
) {
  if (!config.window || !config.window.value) return
  removeListeners(config.window.value, windowListeners[stateKey], options)
  delete windowListeners[stateKey]
}

export function updateWindowListeners(
  { config, windowListeners }: Controller,
  stateKey: StateKey,
  listeners: [string, Fn][] = [],
  options = config.eventOptions,
) {
  if (!config.window || !config.window.value) return
  removeListeners(config.window.value, windowListeners[stateKey], options)
  addListeners(
    config.window.value,
    (windowListeners[stateKey] = listeners),
    options,
  )
}

function updateDomListeners(
  { config, domListeners }: Controller,
  bindings: { [key: string]: Function[] },
) {
  if (!config.domTarget || !config.domTarget.value)
    throw new Error('domTarget must be defined')

  const { eventOptions, domTarget } = config

  removeListeners(domTarget.value, takeAll(domListeners), eventOptions)

  for (let [key, fns] of Object.entries(bindings)) {
    const name = key.slice(2).toLowerCase()
    domListeners.push([name, chainFns(...fns)])
  }

  addListeners(domTarget.value, domListeners, eventOptions)
}

function getPropsListener(
  { config }: Controller,
  bindings: { [key: string]: Function[] },
) {
  const props: EventHandlers = {}
  const captureString = config.eventOptions.capture ? 'Capture' : ''
  for (let [event, fns] of Object.entries(bindings)) {
    const fnsArray = Array.isArray(fns) ? fns : [fns]
    const key = (event + captureString) as EventHandlersKey
    props[key] = chainFns(...(fnsArray as Fn[]))
  }
  return props
}

function takeAll<T>(array: Array<T> = []) {
  return array.splice(0, array.length)
}

/**
 * bindings is an object which keys match EventHandlersKeys.
 * Since a recognizer might want to bind a handler function to an event key already used by a previously
 * added recognizer, we need to make sure that each event key is an array of all the functions mapped for
 * that key.
 */
export function addBindings(bindings: any, name: string, fn: Fn): void {
  if (!bindings[name]) bindings[name] = []
  bindings[name]!.push(fn)
}

function addListeners(
  el: GestureTarget,
  listeners: Array<[string, Fn]> = [],
  options = {},
) {
  if (!el) return

  for (let [eventName, eventHandler] of listeners) {
    el.addEventListener(eventName, eventHandler, options)
  }
}

function removeListeners(
  el: GestureTarget,
  listeners: Array<[string, Fn]> = [],
  options = {},
) {
  if (!el) return

  for (let [eventName, eventHandler] of listeners) {
    el.removeEventListener(eventName, eventHandler, options)
  }
}
