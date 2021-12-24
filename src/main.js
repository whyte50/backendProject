import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

import '../src/assets/style/styles.css'
import '../src/assets/style/bootstrap.min.css'


createApp(App).use(store).use(router).mount('#app')