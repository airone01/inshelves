<script lang="ts">
import { ref } from "vue";

import SidebarItem from "./SidebarItem.vue";

import accountLogo from "../assets/icons/account.png";
import downloadLogo from "../assets/icons/download.png";
import epicgamesLogo from "../assets/icons/epicgames.png";
import homeLogo from "../assets/icons/home.png";
import steamLogo from "../assets/icons/steam.png";

const dragged = ref<any>(null);
let dragging = false;

const dragStart = (e: any, ind: number | string) => {
  e.dataTransfer.setData("text/plain", ind);
  e.target.style.opacity = 0.5;
  e.target.classList.add("animate-bounce");
  dragged.value = e.target;
  dragging = true;
};

const dragEnd = (e: any) => {
  e.target.style.opacity = 1;
  e.target.classList.remove("animate-bounce");
  dragging = false;
};

const drop = (e: any) => {
  dragged.value.style.opacity = 1;
  // dragged.value.parentNode.removeChild(dragged.value);
  // e.target.appendChild(dragged.value);
};

export default {
  data() {
    return {
      dragStart,
      dragEnd,
      drop,
      buttonsTop: [
        {
          name: "Home",
          icon: homeLogo,
          route: "/",
          color: "blue",
        },
        {
          name: "Downloads",
          icon: downloadLogo,
          route: "/downloads",
          color: "blue",
        },
        {
          name: "Steam",
          icon: steamLogo,
          route: "/steam",
          color: "blue",
        },
        {
          name: "Epic Games",
          icon: epicgamesLogo,
          route: "/epic",
          color: "blue",
        },
      ],
      buttonsBot: [
        {
          name: "Login",
          icon: accountLogo,
          route: "/login",
          color: "yellow",
        },
      ],
      components: {
        SidebarItem,
      },
    };
  },
};
</script>

<template>
  <div class="h-screen max-h-screen w-12 bg-gray-800 flex flex-col relative">
    <div :style="`height: calc(100vh - ${buttonsBot.length} * 3rem);`">
      <div v-for="n in buttonsTop" :key="n">
        <SidebarItem
          :color="n.color"
          :icon="n.icon"
          :name="n.name"
          :route="n.route"
          draggable="true"
          @dragstart='dragStart($event, index)'
          @dragend='dragEnd($event)'
        />
        <div
          v-if="!dragging"
          class="h-2 bg-transparent"
          @dragover.prevent=""
          @drop.prevent="drop($event)"
        ></div>
        <div v-else class="border-2 border-blue-400"></div>
      </div>
    </div>
    <div class="absolute bottom-0 z-50">
      <SidebarItem
        v-for="n in buttonsBot"
        :key="n"
        :color="n.color"
        :icon="n.icon"
        :name="n.name"
        :route="n.route"
      />
    </div>
  </div>
</template>