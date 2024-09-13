<script>
import { ProductService } from "@/service/ProductService";

export default {
  data() {
    return {
      interval: 8000,
      products: null,
      firstThirdProducts: [],
      secondThirdProducts: [],
      thirdThirdProducts: [],
      responsiveOptions: [
        {
          breakpoint: "1400px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "1199px",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "767px",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "575px",
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
  mounted() {
    const productService = new ProductService();
    productService.getProductsSmall().then((data) => {
      const third = Math.ceil(data.length / 3);
      const twoThirds = third * 2;

      this.firstThirdProducts = data.slice(0, third);
      this.secondThirdProducts = data.slice(third, twoThirds);
      this.thirdThirdProducts = data.slice(twoThirds);
    });
  },
  // mounted() {
  //   const productService = new ProductService();
  //   productService.getProductsSmall().then((data) => {
  //     this.products = data;
  //   });
  // },
  // mounted() {
  //   ProductService.getProductsSmall().then((data) => {
  //     console.log("Prodotti ricevuti:", data);
  //     this.products = data;
  //   });
  // },
  methods: {
    getSeverity(status) {
      switch (status) {
        case "INSTOCK":
          return "success";

        case "LOWSTOCK":
          return "warn";

        case "OUTOFSTOCK":
          return "danger";

        default:
          return null;
      }
    },
  },
};
</script>

<template>
  <div class="mx-auto grid lg:grid-cols-4 md:grid-cols-3 gap-1">
    <!-- Primo Carosello -->
    <Carousel
      class="lg:col-span-2 md:col-span-1"
      :value="firstThirdProducts"
      :numVisible="1"
      :numScroll="1"
      :showNavigators="false"
      :autoplayInterval="interval"
      :showIndicators="false"
      :page="0"
    >
      <!-- :responsiveOptions="responsiveOptions" -->
      <template #item="slotProps">
        <!-- <div class="mb-4 font-medium">{{ slotProps.index }}</div> -->
        <div
          class="h-[320px] border border-surface-200 dark:border-surface-700 rounded mx-2 p-4 bg-cover bg-center"
          :style="{
            backgroundImage: `url('https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}')`,
          }"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <!-- <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="bg-cover rounded"
              /> -->
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <!-- <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" /> -->
            </span>
          </div>
        </div>
      </template>
    </Carousel>

    <!-- Secondo Carosello -->
    <Carousel
      :value="secondThirdProducts"
      :numVisible="1"
      :numScroll="1"
      cirle
      orientation="vertical"
      :showNavigators="false"
      :autoplayInterval="interval"
      verticalViewPortHeight="350px"
      :showIndicators="false"
      containerClass="flex items-center"
    >
      <template #item="slotProps">
        <!-- <div
          class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
        > -->
        <div
          class="h-[320px] md:w-[300px] lg:w-[360px] border border-surface-200 dark:border-surface-700 rounded p-4 bg-cover bg-center"
          :style="{
            backgroundImage: `url('https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}')`,
          }"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <!-- <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-auto rounded"
              /> -->
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <!-- <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" /> -->
            </span>
          </div>
        </div>
      </template>
    </Carousel>
    <!-- terzo Carosello -->
    <Carousel
      :value="thirdThirdProducts"
      :numVisible="1"
      :numScroll="1"
      cirle
      orientation="vertical"
      :showNavigators="false"
      :autoplayInterval="interval"
      verticalViewPortHeight="350px"
      :showIndicators="false"
      containerClass="flex items-center"
    >
      <template #item="slotProps">
        <!-- <div
          class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
        > -->
        <div
          class="h-[320px] md:w-[300px] lg:w-[360px] border border-surface-200 dark:border-surface-700 rounded p-4 bg-cover bg-center"
          :style="{
            backgroundImage: `url('https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}')`,
          }"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <!-- <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-auto rounded"
              /> -->
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <!-- <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" /> -->
            </span>
          </div>
        </div>
      </template>
    </Carousel>
    <!-- <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="interval"
    >
      <template #item="slotProps">
        <div
          class="border border-surface-200 dark:border-surface-700 rounded m-2 p-4"
        >
          <div class="mb-4">
            <div class="relative mx-auto">
              <img
                :src="
                  'https://primefaces.org/cdn/primevue/images/product/' +
                  slotProps.data.image
                "
                :alt="slotProps.data.name"
                class="w-full rounded"
              />
              <Tag
                :value="slotProps.data.inventoryStatus"
                :severity="getSeverity(slotProps.data.inventoryStatus)"
                class="absolute"
                style="left: 5px; top: 5px"
              />
            </div>
          </div>
          <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
          <div class="flex justify-between items-center">
            <div class="mt-0 font-semibold text-xl">
              ${{ slotProps.data.price }}
            </div>
            <span>
              <Button icon="pi pi-heart" severity="secondary" outlined />
              <Button icon="pi pi-shopping-cart" class="ml-2" />
            </span>
          </div>
        </div>
      </template>
    </Carousel> -->
  </div>
</template>

<style scoped>
.p-carousel-content {
  background-color: red !important;
}
</style>
