<script>
// import { store } from "../data/store.js";
import AppHeroSC from "./subComponentHeader/AppHeroSC.vue";
import AppHeaderSC from "./subComponentHeader/AppHeaderSC.vue";
import AppMarquee from "./subComponentHeader/AppMarquee.vue";

export default {
  data() {
    return {
      title: "titolo",
      scTimer: 0,
      scY: 0,
      // store,
      title: "Sikelian",
      subTitle: "TUTTO QUANTO FA SICILIA",
    };
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
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
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <section
    v-motion
    :initial="{ opacity: 0, y: -100 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="400"
    class="backdrop-blur-sm fixed top-0 w-full bg-gradient-to-b from-secondary to-secondary/5"
  >
    <AppMarquee />
    <section
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :duration="700"
    >
      <div
        :class="[
          'font-bold text-center pt-1 animate-zoominright animate-once animate-delay-300 animate-duration-700 transition-all duration-500 ease-in-out',
          +scY >= 100 ? 'text-3xl' : 'text-5xl',
        ]"
      >
        {{ title }}
      </div>
      <h2
        class="text-lg font-bold text-center animate-zoominleft animate-once animate-delay-300 animate-duration-700"
      >
        {{ subTitle }}
      </h2>
    </section>
    <AppHeaderSC />
    <!-- <AppHeroSC /> -->
  </section>
</template>

<style lang="css" scoped></style>
