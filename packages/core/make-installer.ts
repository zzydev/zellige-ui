import type { App, Plugin } from 'vue'
import { each } from 'lodash-es'

export function makeInstaller(components: Plugin[]) {
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c)
    })

  return install
}
