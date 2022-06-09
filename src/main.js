import { createApp } from 'vue'
import '@/assets/css/normalize.css'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel'
import App from './app.vue'
import router from './router'
import store from './store/index'

createApp(App).use(store).use(router).mount('#app')
