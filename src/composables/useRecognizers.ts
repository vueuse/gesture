import { getCurrentInstance, onMounted, onUnmounted } from 'vue-demi'
import Controller from '../Controller'
import { RecognizersMap } from '../recognizers/Recognizer'
import {
  InternalConfig,
  InternalHandlers,
  NativeHandlers,
  RecognizerClass,
} from '../types'

/**
 * Utility hook called by all gesture hooks and that will be responsible for the internals.
 *
 * @param handlers
 * @param classes
 * @param config
 * @param nativeHandlers - native handlers such as onClick, onMouseDown, etc.
 */
export default function useRecognizers(
  handlers: Partial<InternalHandlers>,
  config: InternalConfig,
  nativeHandlers: Partial<NativeHandlers> = {},
) {
  const classes = resolveClasses(handlers)
  const controller = new Controller(classes)
  controller!.config = config
  controller!.handlers = handlers
  controller!.nativeRefs = nativeHandlers

  // Unbind when host component unmounts
  if (getCurrentInstance()) {
    onMounted(controller.bind)
    onUnmounted(controller.clean)
  }
}

function resolveClasses(internalHandlers: Partial<InternalHandlers>) {
  const classes = new Set<RecognizerClass>()

  if (internalHandlers.drag) classes.add(RecognizersMap.get('drag')!)
  if (internalHandlers.wheel) classes.add(RecognizersMap.get('wheel')!)
  if (internalHandlers.scroll) classes.add(RecognizersMap.get('scroll')!)
  if (internalHandlers.move) classes.add(RecognizersMap.get('move')!)
  if (internalHandlers.pinch) classes.add(RecognizersMap.get('pinch')!)
  if (internalHandlers.hover) classes.add(RecognizersMap.get('hover')!)

  return classes
}
