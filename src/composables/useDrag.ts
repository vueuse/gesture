import {
  isMotionInstance,
  MotionInstance,
  MotionVariants,
} from '@vueuse/motion'
import { ref } from 'vue-demi'
import { DragRecognizer } from '../recognizers/DragRecognizer'
import { RecognizersMap } from '../recognizers/Recognizer'
import { EventTypes, Handler, UseDragConfig } from '../types'
import memoize from '../utils/memoize-one'
import { resolveFromMotionInstance } from '../utils/motion'
import isEqual from '../utils/react-fast-compare'
import { _buildDragConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Drag hook.
 *
 * @param handler - the function fired every time the drag gesture updates
 * @param [config={}] - the config object including generic options and drag options
 */
export function useDrag<T extends MotionVariants, K = EventTypes['drag']>(
  handler: Handler<'drag', K> | MotionInstance<T>,
  config: UseDragConfig | {} = {},
) {
  let _config: UseDragConfig
  let _handler: Handler<'drag', K>

  if (isMotionInstance(handler)) {
    const resolved = resolveFromMotionInstance<'drag', K>(handler, config)

    _config = resolved.config
    _handler = resolved.handler
  } else {
    _config = config as UseDragConfig
    _handler = handler as Handler<'drag', K>
  }

  RecognizersMap.set('drag', DragRecognizer)

  const buildDragConfig = ref()

  if (!buildDragConfig.value) {
    buildDragConfig.value = memoize(_buildDragConfig, isEqual)
  }

  useRecognizers({ drag: _handler }, buildDragConfig.value(_config))
}
