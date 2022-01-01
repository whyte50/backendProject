import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

import '../src/assets/style/styles.css'
import '../src/assets/style/bootstrap.min.css'

app.use(store).use(router).mount('#app')