import { ref } from 'vue-demi'
import { RecognizersMap } from '../recognizers/Recognizer'
import { ScrollRecognizer } from '../recognizers/ScrollRecognizer'
import { EventTypes, Handler, UseScrollConfig } from '../types'
import memoize from '../utils/memoize-one'
import isEqual from '../utils/react-fast-compare'
import { _buildScrollConfig } from './buildConfig'
import useRecognizers from './useRecognizers'

/**
 * Scroll hook.
 *
 * @param handler - the function fired every time the scroll gesture updates
 * @param [config={}] - the config object including generic options and scroll options
 */
export function useScroll<K = EventTypes['scroll']>(
  handler: Handler<'scroll', K>,
  config: UseScrollConfig | {} = {},
) {
  RecognizersMap.set('scroll', ScrollRecognizer)

  const buildScrollConfig = ref()

  if (!buildScrollConfig.value) {
    buildScrollConfig.value = memoize(_buildScrollConfig, isEqual)
  }

  useRecognizers({ scroll: handler }, buildScrollConfig.value(config))
}
