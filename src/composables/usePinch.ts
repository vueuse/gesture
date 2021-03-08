import { ref } from 'vue-demi'
import { PinchRecognizer } from '../recognizers/PinchRecognizer'
import { RecognizersMap } from '../recognizers/Recognizer'
import { EventTypes, Handler, UsePinchConfig } from '../types'
import memoize from '../utils/memoize-one'
import isEqual from '../utils/react-fast-compare'
import { _buildPinchConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Pinch hook.
 *
 * @param handler - the function fired every time the pinch gesture updates
 * @param [config={}] - the config object including generic options and pinch options
 */
export function usePinch<K = EventTypes['pinch']>(
  handler: Handler<'pinch', K>,
  config: UsePinchConfig | {} = {},
) {
  RecognizersMap.set('pinch', PinchRecognizer)

  const buildPinchConfig = ref()

  if (!buildPinchConfig.value) {
    buildPinchConfig.value = memoize(_buildPinchConfig, isEqual)
  }

  useRecognizers({ pinch: handler }, buildPinchConfig.value(config))
}
