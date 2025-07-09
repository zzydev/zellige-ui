import { withInstall } from '@zellige-ui/utils/index'
import type { SFCWithInstall } from '@zellige-ui/utils/index'

import Button from './src/button.vue'

export const ZeButton: SFCWithInstall<typeof Button> = withInstall(Button)
