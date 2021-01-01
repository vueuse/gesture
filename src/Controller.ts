import { unref } from 'vue-demi'
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

    const _target = unref(domTarget) as GestureTarget

    if (_target)
      removeListeners(_target, takeAll(this.domListeners), eventOptions)

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
  const _el = unref(el) as GestureTarget

  if (!_el) return

  for (let stateKey in windowListeners) {
    const handlers = windowListeners[stateKey as StateKey]
    removeListeners(_el, handlers, eventOptions)
  }

  controller.windowListeners = {}
}

export function clearWindowListeners(
  { config, windowListeners }: Controller,
  stateKey: StateKey,
  options = config.eventOptions,
) {
  const _window = unref(config.window) as GestureTarget

  if (!_window) return

  removeListeners(_window, windowListeners[stateKey], options)

  delete windowListeners[stateKey]
}

export function updateWindowListeners(
  { config, windowListeners }: Controller,
  stateKey: StateKey,
  listeners: [string, Fn][] = [],
  options = config.eventOptions,
) {
  const _window = unref(config.window) as GestureTarget

  if (!_window) return

  removeListeners(_window, windowListeners[stateKey], options)

  addListeners(_window, (windowListeners[stateKey] = listeners), options)
}

function updateDomListeners(
  { config, domListeners }: Controller,
  bindings: { [key: string]: Function[] },
) {
  const { eventOptions, domTarget } = config

  const _target = unref(domTarget) as GestureTarget

  if (!_target) throw new Error('domTarget must be defined')

  removeListeners(_target, takeAll(domListeners), eventOptions)

  for (let [key, fns] of Object.entries(bindings)) {
    const name = key.slice(2).toLowerCase()
    domListeners.push([name, chainFns(...fns)])
  }

  addListeners(_target, domListeners, eventOptions)
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
