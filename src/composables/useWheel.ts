import { ref } from 'vue-demi'
import { RecognizersMap } from '../recognizers/Recognizer'
import { WheelRecognizer } from '../recognizers/WheelRecognizer'
import { EventTypes, Handler, UseWheelConfig } from '../types'
import memoize from '../utils/memoize-one'
import isEqual from '../utils/react-fast-compare'
import { _buildWheelConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Wheel hook.
 *
 * @param handler - the function fired every time the wheel gesture updates
 * @param the config object including generic options and wheel options
 */
export function useWheel<K = EventTypes['wheel']>(
  handler: Handler<'wheel', K>,
  config: UseWheelConfig | {} = {},
) {
  RecognizersMap.set('wheel', WheelRecognizer)

  const buildWheelConfig = ref()

  if (!buildWheelConfig.value) {
    buildWheelConfig.value = memoize(_buildWheelConfig, isEqual)
  }

  const recognizers = useRecognizers<UseWheelConfig>(
    { wheel: handler },
    buildWheelConfig.value(config),
  )

  recognizers()
}
