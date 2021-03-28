import { ref } from 'vue-demi'
import { MoveRecognizer } from '../recognizers/MoveRecognizer'
import { RecognizersMap } from '../recognizers/Recognizer'
import { EventTypes, Handler, UseMoveConfig } from '../types'
import memoize from '../utils/memoize-one'
import isEqual from '../utils/react-fast-compare'
import { _buildMoveConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Move hook.
 *
 * @param handler - the function fired every time the move gesture updates
 * @param [config={}] - the config object including generic options and move options
 */
export function useMove<K = EventTypes['move']>(
  handler: Handler<'move', K>,
  config: UseMoveConfig | {} = {},
) {
  RecognizersMap.set('move', MoveRecognizer)

  const buildMoveConfig = ref()

  if (!buildMoveConfig.value) {
    buildMoveConfig.value = memoize(_buildMoveConfig, isEqual)
  }

  return useRecognizers({ move: handler }, buildMoveConfig.value(config))
}
