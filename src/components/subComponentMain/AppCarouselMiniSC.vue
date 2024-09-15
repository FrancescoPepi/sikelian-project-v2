<script>
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
      <!-- card 1 -->
      <div
        class="group col-span-1 row-span-2 relative overflow-hidden animate-duration-1000"
        v-motion
        :initial="{ opacity: 0, x: 200 }"
        :visible="{ opacity: 1, x: 0 }"
        :delay="150 + i * 200"
        :duration="800"
        v-for="i in 6"
      >
        <div
          class="bg-white border rounded-xl shadow-custom bg-center hover:bg-zinc-500 grayscale-[0.4] group-hover:grayscale-0 relative w-full h-full transition duration-300 ease-in-out overflow-hidden max-h-[350px]"
        >
          <!-- BG IMAGE -->
          <img
            :src="dataNotice[0].img"
            class="absolute z-0 object-cover top-52 left-52 -translate-x-52 -translate-y-52 h-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
          />
          <Tag
            rounded
            :value="dataNotice[0].category"
            class="absolute top-5 right-5"
          />
          <!-- Title and Paragraph (both appear from the bottom) -->
          <div
            class="absolute inset-0 flex flex-col justify-end z-10 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
          >
            <div
              class="bg-gradient-to-b to-secondary from-secondary/5 transform transition-transform duration-500 ease-in-out px-2"
            >
              <!-- Titolo visibile, parte dal bordo inferiore -->
              <h2
                class="text-white text-xl font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
              >
                {{ truncatedTitle }}
              </h2>

              <!-- Paragrafo che appare al passaggio del mouse sotto il titolo -->
              <!-- v-if="dataNotice[0].paragraph" -->
              <p
                class="text-primary font-medium text-sm mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transition-all duration-500 ease-in-out [text-shadow:_0_1px_0_#ffffff7d]"
              >
                {{ truncatedParagraph }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="absolute -top-full -left-full group-hover:top-5 z-20 group-hover:left-2 transform transition-all duration-500 ease-in-out animate-bounce opacity-80"
        >
          <Button
            icon="angle-right"
            severity="secondary"
            rounded
            aria-label="Bookmark"
          >
            <font-awesome-icon class="m-auto" icon="angle-right" />
          </Button>
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
