import { addBindings } from '../Controller'
import { getGenericEventData, getWheelEventValues } from '../utils/event'
import { addV, calculateAllGeometry } from '../utils/math'
import CoordinatesRecognizer from './CoordinatesRecognizer'
import { getGenericPayload, getStartGestureState } from './Recognizer'
export class WheelRecognizer extends CoordinatesRecognizer<'wheel'> {
  readonly ingKey = 'wheeling'
  readonly stateKey = 'wheel'
  debounced = true

  handleEvent = (event: WheelEvent): void => {
    if (event.ctrlKey && 'pinch' in this.controller.handlers) return
    if (!this.enabled) return

    this.setTimeout(this.onEnd)
    this.updateSharedState(getGenericEventData(event))

    const values = addV(
      getWheelEventValues(event, this.transform),
      this.state.values,
    )

    if (!this.state._active) {
      this.updateGestureState({
        ...getStartGestureState(this, values, event),
        ...getGenericPayload(this, event, true),
        initial: this.state.values,
      })

      const movement = this.getMovement(values)
      const geometry = calculateAllGeometry(movement.delta!)

      this.updateGestureState(movement)
      this.updateGestureState(geometry)
    } else {
      this.updateGestureState({
        ...getGenericPayload(this, event),
        ...this.getKinematics(values, event),
      })
    }

    this.fireGestureHandler()
  }

  onEnd = (): void => {
    this.clean()
    if (!this.state._active) return
    const movement = this.getMovement(this.state.values)
    this.updateGestureState(movement)
    this.updateGestureState({ _active: false, velocities: [0, 0], velocity: 0 })
    this.fireGestureHandler()
  }

  addBindings(bindings: any): void {
    addBindings(bindings, 'onWheel', this.handleEvent)
  }
}
