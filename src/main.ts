import { createApp } from 'vue'

import App from './App.vue'
import Sidebar from './components/Sidebar.vue'

// Global CSS
import './index.css'

// Create app
const vApp = createApp(App)

// Register components
vApp.component('Sidebar', Sidebar)

// Mount app
const mountedApp = vApp.mount('#app')
