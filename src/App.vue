<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import AppUpViewport from "./components/AppUpViewport.vue";
import GridPattern from "./components/UI/AppSfondo.vue";

export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },

  components: {
    GridPattern,
    AppHeader,
    AppMain,
    AppFooter,
    AppUpViewport,
  },
};
</script>

<template>
  <AppHeader id="header" />
  <AppMain class="scroll-smooth focus:scroll-auto" />
  <GridPattern
    :squares="[
      [30, 40],
      [30, 45],
      [40, 35],
      [40, 35],
      [20, 34],
      [24, 32],
      [5, 1],
      [80, 2],
      [13, 30],
      [23, 20],
      [28, 20],
      [20, 20],
      [30, 22],
      [32, 26],
      [26, 16],
      [26, 10],
      [46, 10],
      [48, 10],
      [48, 12],
      [43, 12],
      [33, 4],
      [23, 6],
      [23, 5],
      [23, 4],
      [22, 4],
      [24, 4],
    ]"
    class="[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-30%] h-[100%] translate-y-96 skew-y-12 fixed z-0 opacity-45"
  />
  <AppFooter />
  <AppUpViewport />
</template>

<style>
#header {
  z-index: 90;
}
#header + * {
  margin-top: 193px;
}
</style>
