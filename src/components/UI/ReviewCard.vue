<template>
  <figure
    class="relative max-w-80 cursor-pointer overflow-hidden rounded-xl border px-2 pt-1 border-gray-950/[.3] bg-white hover:bg-gray-950/[.1] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  >
    <div class="group grid grid-rows-1 grid-flow-col items-center">
      <section class="flex flex-col gap-1">
        <div class="flex flex-row gap-1">
          <Avatar :image="img" class="min-w-max" shape="circle" />
          <div class="flex flex-col text-end w-full text-[0.6rem]">
            <figcaption class="font-medium dark:text-white">
              {{ name }}
            </figcaption>
            <p class="font-medium dark:text-white/40">
              {{ username }}
            </p>
          </div>
        </div>
        <p
          class="absolute top-[-2px] right-2 text-[0.6rem] text-end font-medium dark:text-white/40"
        >
          {{ datetime }}
        </p>
      </section>
      <Divider
        layout="vertical"
        class="mx-[1px] my-0 group-hover:border-l-gray-950/70"
      />
      <p class="text-xs line-clamp-2 text-wrap pt-1">{{ body }}</p>
    </div>
  </figure>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    img: String,
    name: String,
    username: String,
    datetime: String,
    body: String,
  },
};
</script>

<style scoped>
/* Puoi aggiungere eventuali stili personalizzati qui */
/* .line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
} */
</style>
