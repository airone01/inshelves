import { createApp } from 'vue'

import App from './App.vue'
import Sidebar from './components/Sidebar.vue'
import SidebarItem from './components/SidebarItem.vue'

// Global CSS
import './index.css'

// Create app
const vApp = createApp(App)

// Register components
vApp.component('Sidebar', Sidebar)
vApp.component('SidebarItem', SidebarItem)

// Mount app
const mountedApp = vApp.mount('#app')
