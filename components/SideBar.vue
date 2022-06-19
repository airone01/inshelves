<script lang="ts">
export default {
  name: 'SideBar',
  display: 'SideBar',
  data() {
    return {
      buttonsTop: [
        {
          name: 'Home',
          icon: 'home.png',
          route: '/',
          color: 'blue',
          id: 0,
        },
        {
          name: 'Downloads',
          icon: 'download.png',
          route: '/downloads',
          color: 'blue',
          id: 1,
        },
      ],
      buttonsTopDraggable: [
        {
          name: 'Steam',
          icon: 'steam.png',
          route: '/steam',
          color: 'blue',
          id: 2,
        },
        {
          name: 'Epic Games',
          icon: 'epicgames.png',
          route: '/epic',
          color: 'blue',
          id: 3,
        },
      ],
      buttonsBot: [
        {
          name: 'Login',
          icon: 'account.png',
          route: '/login',
          color: 'yellow',
        },
      ],
      drag: false,
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost',
      }
    },
  },
}
</script>

<template>
  <div
    class="h-screen max-h-screen w-12 bg-gray-800 flex flex-col relative select-none"
  >
    <div :style="`height: calc(100vh - ${buttonsBot.length} * 3rem);`">
      <SideBarItem
        v-for="e in buttonsTop"
        :key="e"
        class="mb-2"
        :color="e.color"
        :icon="e.icon"
        :name="e.name"
        :route="e.route"
      />
      <DraggableComponent
        v-model="buttonsTopDraggable"
        :component-data="{
          tag: 'ul',
          type: 'transition-group',
          name: !drag ? 'flip-list' : null,
        }"
        group="buttons"
        item-key="name"
        :drag-options="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element: e }">
          <SideBarItem
            :key="e.name"
            :color="e.color"
            :icon="e.icon"
            :name="e.name"
            :route="e.route"
            class="mb-2"
          />
        </template>
      </DraggableComponent>
    </div>
    <div class="absolute bottom-0 z-50">
      <SideBarItem
        v-for="e in buttonsBot"
        :key="e"
        class="mt-2"
        :color="e.color"
        :icon="e.icon"
        :name="e.name"
        :route="e.route"
      />
    </div>
  </div>
</template>

<style scoped>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}

.ghost {
}

.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
</style>
