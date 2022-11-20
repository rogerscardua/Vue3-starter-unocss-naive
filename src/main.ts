import 'uno.css';
import { createApp } from 'vue'
import App from './App.vue'
import { store } from '@/store'
import { setupRouter } from '@/router'
import Vue3MobileDetection from "vue3-mobile-detection";

const app = createApp(App)
app.use(store)
setupRouter(app)
app.mount('#app')
app.use(Vue3MobileDetection)