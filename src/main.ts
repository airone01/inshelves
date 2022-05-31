import { app } from '@tauri-apps/api'
import { createApp } from 'vue'
import App from './App.vue'
import Sidebar from './components/Sidebar.vue'
import './index.css'

const tApp = createApp(App)
tApp.component('Sidebar', Sidebar)
const mountedApp = tApp.mount('#app')
