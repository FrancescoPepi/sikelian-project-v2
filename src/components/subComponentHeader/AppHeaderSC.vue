<script>
import { ref } from "vue";

export default {
  data() {
    return {
      title: "Header SubComponent",
      searchText: "",
      items: ref([
        {
          label: "HOME",
          icon: "house",
        },
        {
          label: "CRONACA",
          icon: "newspaper",
        },
        {
          label: "POLITICA",
          icon: "landmark-dome",
          // badge: 3,
        },
        {
          label: "CULTURA",
          icon: "earth-americas",
          // badge: 3,
        },
        {
          label: "SPETTACOLI",
          icon: "masks-theater",
          // badge: 3,
        },
        {
          label: "ECCELLENZE",
          icon: "award",
          // badge: 3,
        },
        {
          label: "FOOD & WINE",
          icon: "utensils",
          // badge: 3,
        },
        {
          label: "NOTIZIE",
          icon: "fa-regular fa-newspaper",
          items: [
            {
              label: "Core",
              icon: "newspaper",
              shortcut: "⌘+S",
            },
            {
              label: "Blocks",
              icon: "newspaper",
              shortcut: "⌘+B",
            },
            {
              label: "UI Kit",
              icon: "newspaper",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "newspaper",
              items: [
                {
                  label: "Apollo",
                  icon: "newspaper",
                  badge: 2,
                },
                {
                  label: "Ultima",
                  icon: "newspaper",
                  badge: 3,
                },
              ],
            },
          ],
        },
        {
          label: "RUBRICHE",
          icon: "book-open",
          items: [
            {
              label: "Core",
              icon: "newspaper",
              shortcut: "⌘+S",
            },
            {
              label: "Blocks",
              icon: "newspaper",
              shortcut: "⌘+B",
            },
            {
              label: "UI Kit",
              icon: "newspaper",
              shortcut: "⌘+U",
            },
            {
              separator: true,
            },
            {
              label: "Templates",
              icon: "newspaper",
              items: [
                {
                  label: "Apollo",
                  icon: "newspaper",
                  badge: 2,
                },
                {
                  label: "Ultima",
                  icon: "newspaper",
                  badge: 3,
                },
              ],
            },
          ],
        },
        {
          label: "VIDEO",
          icon: "fa-brands fa-youtube",
        },
      ]),
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <div class="mx-auto max-w-screen-2xl text-sm">
    <Menubar :model="items">
      <!-- <template #start> </template> -->
      <template #item="{ item, props, hasSubmenu, root }">
        <a
          v-ripple
          class="group flex items-center border border-transparent hover:border-terzo/40 transition-all duration-400 font-semibold hover:text-white rounded-md hover:bg-terzo/30"
          v-bind="props.action"
        >
          <font-awesome-icon :icon="item.icon" />
          <span class="">{{ item.label }}</span>
          <!-- :class="{ 'ml-auto': !root, 'ms-1': root }" -->
          <Badge v-if="item.badge" :value="item.badge" />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded-md bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <font-awesome-icon v-if="hasSubmenu && root" icon="angle-down" />
          <font-awesome-icon
            v-if="hasSubmenu && !root"
            class="ml-auto"
            icon="angle-right"
          />
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <IconField>
            <InputIcon>
              <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </InputIcon>
            <InputText v-model="searchText" placeholder="Search" />
          </IconField>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<style lang="css" scoped>
.p-focus {
  background-color: red;
}
.p-menubar {
  border: 0;
  background: transparent;
  padding: 8px 24px 8px 12px;
}
.bg {
  /* background-color: lightgreen; */
  /* border: 2px dashed red; */
  color: white;
}
</style>
