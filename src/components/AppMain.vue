<script>
import AppCarouselSC from "./subComponentMain/AppCarouselSC.vue";
import AppCarouselMiniSC from "./subComponentMain/AppCarouselMiniSC.vue";
import AppCarouselYoutubeSC from "./subComponentMain/AppCarouselYoutubeSC.vue";
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
    AppCarouselMiniSC,
    AppCarouselYoutubeSC,
  },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <section class="md:max-w-screen-xl mx-auto test min-h-[500px] scroll-smooth">
    <!-- <h1 class="text-3xl font-bold">--------------{{ title }}--------------</h1> -->
    <AppCarouselSC class="my-5" />

    <Divider align="left" type="solid">
      <b>Mondo Sposa</b>
    </Divider>

    <AppCarouselMiniSC class="my-5" />

    <Divider align="left" type="solid">
      <b>Storie Arcane</b>
    </Divider>

    <AppCarouselMiniSC class="my-5" />

    <Divider align="left" type="solid">
      <b>Canale YouTube</b>
    </Divider>

    <AppCarouselYoutubeSC class="my-5" />
  </section>
</template>

<style lang="css" scoped>
.p-divider-horizontal::before {
  /* border-top-color: #0d1b2a3c;
  border-top: 2px; */
  border-image: linear-gradient(
      to right,
      #3ad0d500 0%,
      #0d1b2a 50%,
      #3ad0d500 100%
    )
    1;
  border-width: 1px;
  border-style: solid;
  /* border: 2px solid #0d1b2a; */
}
.p-divider-horizontal > * {
  margin-left: 100px;
  backdrop-filter: blur(100px);
  background: transparent;
}
/* .test {
  border: 2px dashed red;
} */

/* .test \* {
  border: 2px dashed green;
} */
</style>
