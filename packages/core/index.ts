import { makeInstaller } from './make-installer'
import components from './components'

import '@zellige-ui/theme/index.css'

const installer = makeInstaller(components)

export * from '@zellige-ui/components'
export default installer
