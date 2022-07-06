import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/_reset.scss"
import "@/assets/css/fonts.scss"
import "@/assets/css/responsive.scss"

createApp(App).use(router).mount('#app')
