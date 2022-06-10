<script lang="ts">
import accountLogo from '../assets/icons/account.png';
import downloadLogo from '../assets/icons/download.png';
import epicgamesLogo from '../assets/icons/epicgames.png';
import homeLogo from '../assets/icons/home.png';
import steamLogo from '../assets/icons/steam.png';

export default {
  data() {
    return {
      buttons: [
        {
          name: 'Home',
          icon: homeLogo,
          route: '/',
          color: 'blue'
        },
        {
          name: 'Downloads',
          icon: downloadLogo,
          route: '/downloads',
          color: 'blue'
        },
        {
          name: 'Steam',
          icon: steamLogo,
          route: '/steam',
          color: 'blue',
        },
        {
          name: 'Epic Games',
          icon: epicgamesLogo,
          route: '/epic',
          color: 'blue',
          lastStart: true
        },
        {
          name: 'Login',
          icon: accountLogo,
          route: '/login',
          color: 'yellow'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="h-screen w-fit bg-gray-800 flex flex-col">
    <div :class="`h-12 w-12 rounded-lg transition duration-200 group ${n.lastStart ? 'mb-auto mt-1' : 'my-1'}`" v-for="n in buttons">
      <a :class="`h-full w-full relative flex flex-row items-center justify-center text-white bg-slate-800 rounded-lg transition duration-200 z-40 group-hover:z-0 ins-${n.color}`" :href="n.route" v-bind="n">
        <div :class="`w-full h-full absolute top-0 left-0 blur-md transition duration-200 z-40 group-hover:z-10 ins-${n.color}`"></div>
        <div class="w-full h-full absolute top-0 left-0 flex flex-row justify-center items-center transition z-50 group-hover:z-20">
          <img :src="n.icon" class="w-2/3 h-2/3 group-hover:invert transition duration-200 z-50" />
        </div>
      </a>
    </div>
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