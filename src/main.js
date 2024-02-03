import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'
import store from './store/store'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'


createApp(App).use(PrimeVue).use(router).use(store).mount('#app')
