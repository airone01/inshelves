import DraggableComponent from 'vuedraggable'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('DraggableComponent', DraggableComponent)
})
