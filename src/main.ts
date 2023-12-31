import '@central-design-system/components/dist/cds.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createCds, components, directives } from '@central-design-system/components'
import { icons } from '@central-design-system/icons'

import App from './app/App.vue'
import router from './app/router'

const app = createApp(App)
const cds = createCds({
  components,
  directives,
  icons
  // ...options
})

app.use(cds)
app.use(createPinia())
app.use(router)

app.mount('#app')
