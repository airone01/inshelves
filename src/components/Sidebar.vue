<script lang="ts">
import SidebarItem from './SidebarItem.vue'

import accountLogo from '../assets/icons/account.png';
import downloadLogo from '../assets/icons/download.png';
import epicgamesLogo from '../assets/icons/epicgames.png';
import homeLogo from '../assets/icons/home.png';
import steamLogo from '../assets/icons/steam.png';

export default {
  data() {
    return {
      buttonsTop: [
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
        }
      ],
      buttonsBot: [
        {
          name: 'Login',
          icon: accountLogo,
          route: '/login',
          color: 'yellow'
        }
      ],
      components: {
        SidebarItem
      }
    }
  }
}
</script>

<template>
  <div class="h-screen max-h-screen w-12 bg-gray-800 flex flex-col relative">
    <div class="overflow-scroll" :style="`height: calc(100vh - ${buttonsBot.length} * 3rem);`">
      <SidebarItem class="mb-2" v-for="n in buttonsTop" v-bind:key="n" :color="n.color" :icon="n.icon" :name="n.name" :route="n.route" />
    </div>
    <div class="absolute bottom-0 z-50">
      <SidebarItem v-for="n in buttonsBot" v-bind:key="n" :color="n.color" :icon="n.icon" :name="n.name" :route="n.route" />
    </div>
  </div>
</template>