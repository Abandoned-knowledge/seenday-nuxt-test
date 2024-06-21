<script setup lang="ts">
import TariffItem from './Tariff.vue';
const { data: tariffs } = await useFetch("/api/tariffs");
const isSelectPerYear = ref<boolean>(false);

</script>

<template>
  <div id="bg">
    <section class="container flex flex-col items-center gap-10">
      <h2 class="h2-text text-center uppercase text-white">
        Тарифы хранилища диска
      </h2>
      <p class="body-text body-text_regular text-center text-white">
        В Хранилище диска ваши фотографии / исходники в безопасности используйте
        их в любое время на любом устройстве.
      </p>

      <div class="switcher">
        <span
          class="switcher__item title-text"
          :class="{ active: !isSelectPerYear }"
          @click="isSelectPerYear = false"
        >
          На месяц
        </span>

        <span
          class="switcher__item title-text"
          :class="{ active: isSelectPerYear }"
          @click="isSelectPerYear = true"
        >
          На год
          <span class="body-text body-text_sm ml-2 text-accent">Выгодно</span>
        </span>
      </div>

      <div class="flex flex-wrap md:flex-nowrap gap-5 w-full xl:w-[80%]">
        <TariffItem
        v-for="item in tariffs"
        :is-select-per-year="isSelectPerYear"
        :preferred="item.preferred"
        :name="item.name"
        :benefits="item.benefits"
        :price-per-month="item.pricePerMonth"
        />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#bg {
  @apply py-16 mt-[300px] min-h-fit;
  background-image: url("@/app/img/BG_gradient.png");
}

.switcher {
  @apply w-[320px] rounded border-[3px] border-accent;
}

.switcher__item {
  @apply inline-block h-full w-[50%] cursor-pointer py-4 text-center text-white hover:bg-accent;
}
.active {
  @apply bg-accent text-white;

  span {
    color: inherit;
  }
}
</style>
