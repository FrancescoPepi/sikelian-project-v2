<!-- <script>
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
  </section>
</template>

<style lang="css" scoped></style> -->

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
// import { store } from "../data/store.js";
import AppHeroSC from "./subComponentHeader/AppHeroSC.vue";
import AppHeaderSC from "./subComponentHeader/AppHeaderSC.vue";
import AppMarquee from "./subComponentHeader/AppMarquee.vue";

export default {
  data() {
    return {
      isMobile: ref(false),
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
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768; // Schermo mobile se meno di 768px
    },
  },
  mounted() {
    this.checkScreenSize(); // Controlla dimensione dello schermo al montaggio
    window.addEventListener("resize", this.checkScreenSize); // Aggiungi listener per il resize
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize); // Rimuovi listener per evitare perdite di memoria
    window.removeEventListener("scroll", this.handleScroll);
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
    v-motion
    :initial="{ opacity: 0, y: -100 }"
    :visible="{ opacity: 1, y: 0 }"
    :duration="400"
    class="backdrop-blur-sm fixed top-0 w-full bg-gradient-to-b from-secondary to-secondary/5"
  >
    <!-- Mostra AppMarquee solo se non è mobile -->
    <AppMarquee v-if="!isMobile" />

    <section
      v-motion
      :initial="{ opacity: 0 }"
      :visible="{ opacity: 1 }"
      :duration="700"
    >
      <div
        :class="[
          'font-bold text-center pt-1 animate-zoominright animate-once animate-delay-300 animate-duration-700 transition-all duration-500 ease-in-out font-titania',
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
  </section>
</template>

<style lang="css" scoped></style>
