<script>
import ReviewCard from "../UI/ReviewCard.vue";

export default {
  name: "AppMarquee",
  components: {
    ReviewCard,
  },
  data() {
    return {
      duration: 3, // Velocità del marquee (più basso è il valore, più veloce è lo scorrimento)
      reviews: [
        {
          name: "Jack",
          username: "@jack",
          datetime: "24/08/2024",
          body: "I've never seen anything like this before. It's amazing. I love it.",
          img: "https://avatar.vercel.sh/jack",
        },
        {
          name: "Jill",
          username: "@jill",
          datetime: "24/08/2024",
          body: "I don't know what to say. I'm speechless. This is amazing.",
          img: "https://avatar.vercel.sh/jill",
        },
        {
          name: "John",
          username: "@john",
          datetime: "24/08/2024",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/john",
        },
        {
          name: "Jane",
          username: "@jane",
          datetime: "24/08/2024",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/jane",
        },
        {
          name: "Jenny",
          username: "@jenny",
          datetime: "24/08/2024",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/jenny",
        },
        {
          name: "James",
          username: "@james",
          datetime: "24/08/2024",
          body: "I'm at a loss for words. This is amazing. I love it.",
          img: "https://avatar.vercel.sh/james",
        },
      ],
    };
  },
  computed: {
    // reviews() {
    //   return this.reviews;
    // },
  },
  methods: {
    pauseMarquee() {
      this.$refs.marquee.stop();
    },
    resumeMarquee() {
      this.$refs.marquee.start();
    },
  },
};
</script>

<template>
  <div
    class="relative flex w-full flex-column items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <marquee
      truespeed
      scolldelay="60"
      ref="marquee"
      v-if="reviews.length"
      :scrollamount="duration"
      @mouseover="pauseMarquee"
      @mouseout="resumeMarquee"
    >
      <div class="flex flex-row gap-2">
        <ReviewCard
          v-for="review in reviews"
          :key="review.username"
          v-bind="review"
          @mouseover="pauseMarquee"
          @mouseout="resumeMarquee"
        />
      </div>
    </marquee>
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white dark:from-background"
    ></div>
    <div
      class="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white dark:from-background"
    ></div>
  </div>
</template>

<style scoped>
/* Aggiungi eventuali stili personalizzati qui */
</style>
