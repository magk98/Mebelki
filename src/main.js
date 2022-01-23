import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

const app = createApp(App);
app.use(router).mount('#app')
console.log(app);
//app.config.compilerOptions.isCustomElement = tag => tag === 'x3d';
