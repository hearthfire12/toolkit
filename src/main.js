import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueClipboard from 'vue-clipboard2'

createApp(App).use(VueClipboard).mount('#app')
