<script>
// import { store } from "../data/store.js";
import AppHeroSC from "./subComponentHeader/AppHeroSC.vue";
import AppHeaderSC from "./subComponentHeader/AppHeaderSC.vue";
import AppMarquee from "./subComponentHeader/AppMarquee.vue";

export default {
  data() {
    return {
      // store,
      title: "Sikelian",
      subTitle: "TUTTO QUANTO FA SICILIA",
    };
  },
  methods: {
    // active(index) {
    //   for (const link in this.links) {
    //     link == index
    //       ? (this.links[link].active = true)
    //       : (this.links[link].active = false);
    //   }
    // },
  },
  components: {
    AppMarquee,
    AppHeroSC,
    AppHeaderSC,
  },
};
</script>

<template>
  <section
    class="backdrop-blur-sm fixed top-0 w-full bg-gradient-to-b from-secondary to-secondary/5"
  >
    <AppMarquee />
    <div class="text-5xl font-bold text-center pt-1">{{ title }}</div>
    <h2 class="text-lg font-bold text-center pb-1">{{ subTitle }}</h2>
    <AppHeaderSC />
    <!-- <AppHeroSC /> -->
  </section>
</template>

<style lang="css" scoped></style>
