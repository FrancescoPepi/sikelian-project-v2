<script>
import duration from "tailwindcss-primeui/src/utils/duration";

// import HeaderComponent from "./components/Header.vue";

export default {
  data() {
    return {
      title: "titolo",
      dataNotice: [
        {
          name: "Jack",
          category: "CULTURA",
          title:
            "TITLE I've never seen anything like this before. It's amazing. ",
          paragraph:
            "I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. I've never seen anything like this before. It's amazing. I love it. ",
          img: "https://www.sikelian.it/wp-content/uploads/2024/09/cinema-2-780x470.jpeg",
        },
      ],
    };
  },

  methods: {
    // Funzione per limitare il testo a un certo numero di parole
    limitWords(text, limit) {
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    },
  },
  computed: {
    // Troncatura dinamica del titolo a 20 parole
    truncatedTitle() {
      const title = this.dataNotice[0]?.title || "";
      return this.limitWords(title, 20);
    },
    // Troncatura dinamica del paragrafo a 50 parole
    truncatedParagraph() {
      const paragraph = this.dataNotice[0]?.paragraph || "";
      return this.limitWords(paragraph, 40);
    },
  },
  // components: {
  //	MyComponent,
  // },

  // 	props:{
  // 		passaggioInfo: stringa,
  //  	 },
};
</script>

<template>
  <section class="md:max-w-screen-lg mx-auto test min-h-[500px] my-2 flex">
    <div class="grid grid-cols-3 grid-rows-full gap-2 grow">
      <div
        v-motion-pop-visible
        :duration="400"
        class="group row-start-1 col-span-full relative overflow-hidden"
      >
        <div
          class="bg-white border rounded-xl shadow-custom bg-center hover:bg-zinc-500 relative w-full h-full transition duration-300 ease-in-out overflow-hidden max-h-[500px]"
        >
          <!-- BG IMAGE -->
          <!-- <img
            :src="dataNotice[0].img"
            class="absolute z-0 object-cover top-52 left-52 -translate-x-52 -translate-y-52 h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          /> -->
          <!-- <Tag
            rounded
            :value="dataNotice[0].category"
            class="absolute top-5 right-5"
          /> -->
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/uWakjWC2V-c?si=8YFqJTGssb4Pg69b"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
.shadow-custom {
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.1),
    0px 1px 2px -1px rgba(0, 0, 0, 0.1);
}
.p-tag {
  color: white;
  background-color: #0d1b2acb;
}
</style>
