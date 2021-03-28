import { Plugin } from 'vue-demi'
import { drag, hover, move, pinch, scroll, wheel } from '../directives'

export const GesturePlugin: Plugin = {
  install(app, options) {
    const directives = { drag, hover, move, pinch, scroll, wheel }

    Object.entries(directives).forEach(([key, directive]) =>
      app.directive(key, directive()),
    )
  },
}
