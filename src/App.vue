<script lang="ts">
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class='flex flex-row w-full h-screen bg-gray-900'>
    <Sidebar />
    <div class='w-full h-full'>
      <TitleBar />
    </div>
  </div>
</template>