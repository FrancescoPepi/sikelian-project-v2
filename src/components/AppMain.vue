<script>
import AppCarouselSC from "./subComponentMain/AppCarouselSC.vue";
import AppMainSC from "./subComponentMain/AppMainSC.vue";
export default {
  data() {
    return {
      title: "MAIN",
    };
  },

  // 	methods:{
  // 		myMethods(){
  // 			...
  // 		},
  // 	},

  components: {
    AppCarouselSC,
    AppMainSC,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <!-- <AppMainSC class="max-w-screen-2xl" /> -->
  <!-- <h1 class="text-3xl font-bold">--------------{{ title }}--------------</h1> -->
  <AppCarouselSC />
</template>

<style lang="css" scoped>
/* .test {
  border: 2px dashed red;
} */

/* .test \* {
  border: 2px dashed green;
} */
</style>
