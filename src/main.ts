import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/normalize.css'
import $ from "jquery";
import router from './router'
import { createPinia } from 'pinia'
createApp(App).use(router).use(createPinia()).use($).mount('#app')
