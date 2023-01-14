import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import 'v-calendar/dist/style.css'
import VCalendar from 'v-calendar'

createApp(App).use(createPinia()).use(router).use(autoAnimatePlugin).use(VCalendar, {}).mount('#app')
