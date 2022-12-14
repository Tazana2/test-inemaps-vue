import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const root = document.getElementById('app')
const app = createApp(App)

app.use(router)

app.mount(root)