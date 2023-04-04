import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(
  createAuth0({
    domain: "jareddantis.jp.auth0.com",
    clientId: "iCJYH757i97NZUK3woYJeKnWld9LK5zj",
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
);

app.mount('#app')
