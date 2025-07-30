import { App } from 'vue'
import share from './share'
import theme from './theme'
import setTitle from './setTitle'
export function setupMixin(app: App) {
    app.mixin(share).mixin(theme).mixin(setTitle)
}
