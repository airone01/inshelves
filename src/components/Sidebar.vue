<script lang="ts">
import draggable from "vuedraggable";

import SidebarItem from "./SidebarItem.vue";

import accountLogo from "../assets/icons/account.png";
import downloadLogo from "../assets/icons/download.png";
import epicgamesLogo from "../assets/icons/epicgames.png";
import homeLogo from "../assets/icons/home.png";
import steamLogo from "../assets/icons/steam.png";

export default {
  name: "sidebar",
  display: "Sidebar",
  components: {
    SidebarItem,
    draggable,
  },
  data() {
    return {
      buttonsTop: [
        {
          name: "Home",
          icon: homeLogo,
          route: "/",
          color: "blue",
          id: 0,
        },
        {
          name: "Downloads",
          icon: downloadLogo,
          route: "/downloads",
          color: "blue",
          id: 1,
        },
      ],
      buttonsTopDraggable: [
        {
          name: "Steam",
          icon: steamLogo,
          route: "/steam",
          color: "blue",
          id: 2,
        },
        {
          name: "Epic Games",
          icon: epicgamesLogo,
          route: "/epic",
          color: "blue",
          id: 3,
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
      drag: false,
    };
  },
};
</script>

<template>
  <div class="h-screen max-h-screen w-12 bg-gray-800 flex flex-col relative select-none">
    <div :style="`height: calc(100vh - ${buttonsBot.length} * 3rem);`">
      <SidebarItem
        class="mb-2"
        v-for="e in buttonsTop"
        :key="e"
        :color="e.color"
        :icon="e.icon"
        :name="e.name"
        :route="e.route"
      />
      <draggable
        v-model="buttonsTopDraggable"
        tag="transition-group"
        :component-data="{ name: 'fade' }"
        group="buttons"
        @start="drag = true"
        @end="drag = false"
        item-key=""
      >
        <template #item="{ element: e }">
          <SidebarItem
            class="mb-2"
            :color="e.color"
            :icon="e.icon"
            :name="e.name"
            :route="e.route"
          />
        </template>
      </draggable>
    </div>
    <div class="absolute bottom-0 z-50">
      <SidebarItem
        class="mt-2"
        v-for="e in buttonsBot"
        :key="e"
        :color="e.color"
        :icon="e.icon"
        :name="e.name"
        :route="e.route"
      />
    </div>
  </div>
</template>