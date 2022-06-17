<script>
export default {
  props: ['color', 'icon', 'name', 'route']
}
</script>

<template>
  <div class="h-12 w-12 rounded-lg transition duration-200 group">
    <a :class="`h-full w-full relative flex flex-row items-center justify-center text-white bg-slate-800 rounded-lg transition duration-200 z-40 group-hover:z-0 ins-${color}`" :href="route">
      <div :class="`w-full h-full absolute top-0 left-0 blur-md transition duration-200 z-40 group-hover:z-10 ins-${color}`"></div>
      <div class="w-full h-full absolute top-0 left-0 flex flex-row justify-center items-center transition z-50 group-hover:z-20">
        <img :src="icon" class="w-2/3 h-2/3 group-hover:invert transition duration-200 z-50" />
      </div>
    </a>
  </div>
</template>

<style scoped>
.group:hover .ins-red {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.group:hover .ins-yellow {
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity));
}

.group:hover .ins-blue {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity));
}
</style>

<style scoped>
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
</style>