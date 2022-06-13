import { createApp } from 'vue'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
