import { createApp } from 'vue'
import App from './App.vue'
import VueFullscreen from 'vue-fullscreen'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App);
app.use(router).use(VueFullscreen).mount('#app')
