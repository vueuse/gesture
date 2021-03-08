import { MotionInstance } from '@vueuse/motion'
import { EventTypes, GenericOptions, GestureKey, Handler } from '../types'

export function resolveFromMotionInstance<
  Config extends Partial<GenericOptions>,
  T extends GestureKey,
  K = EventTypes[T]
>(motionInstance: MotionInstance, config: Config | {}) {
  const handler: Handler<T, K> = () => {}

  const _config: Config | {} = {
    ...config,
    domTarget: motionInstance.target,
  }

  return {
    config: _config,
    handler,
  }
}
