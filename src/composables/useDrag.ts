import { ref } from 'vue-demi'
import { DragRecognizer } from '../recognizers/DragRecognizer'
import { RecognizersMap } from '../recognizers/Recognizer'
import { EventTypes, Handler, UseDragConfig } from '../types'
import memoize from '../utils/memoize-one'
import isEqual from '../utils/react-fast-compare'
import { _buildDragConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Drag hook.
 *
 * @param handler - the function fired every time the drag gesture updates
 * @param [config={}] - the config object including generic options and drag options
 */
export function useDrag<K = EventTypes['drag']>(
  handler: Handler<'drag', K>,
  config: UseDragConfig | {} = {},
) {
  RecognizersMap.set('drag', DragRecognizer)

  const buildDragConfig = ref()

  if (!buildDragConfig.value) {
    buildDragConfig.value = memoize(_buildDragConfig, isEqual)
  }

  return useRecognizers<UseDragConfig>(
    { drag: handler },
    buildDragConfig.value(config),
  )
}
