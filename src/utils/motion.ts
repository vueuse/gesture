import { MotionInstance } from '@vueuse/motion'
import { EventTypes, GestureKey, Handler, UseDragConfig } from '../types'

export function resolveFromMotionInstance<
  T extends GestureKey,
  K = EventTypes[T]
>(motionInstance: MotionInstance, config: UseDragConfig | {} = {}) {
  const handler: Handler<T, K> = ({ movement, down }) => {
    motionInstance.apply({
      x: movement[0],
      y: movement[1],
    })

    if (!down) {
      motionInstance.apply({
        x: 0,
        y: 0,
      })
    }
  }

  const _config: UseDragConfig = {
    ...config,
    domTarget: motionInstance.target,
  }

  return {
    config: _config,
    handler,
  }
}
