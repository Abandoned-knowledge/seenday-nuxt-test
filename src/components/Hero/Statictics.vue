<script setup lang="ts">
const statictics = [
  { title: "60000+", content: "заказов сделали пользователи" },
  { title: "50000+", content: "пользователей зарегистрировано" },
  { title: "более 10%", content: "повторных продаж фотографий" },
  {
    title: "1150+ РУБ",
    content: "средний чек в 2022 году с продажи фотографий",
  },
];
</script>

<template>
  <div class="statictics">
    <div v-for="stat in statictics" class="statictics__item">
      <p class="text-main text-[27px] font-bold">{{ stat.title }}</p>
      <p class="text-[13px] leading-4">{{ stat.content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statictics {
  @apply flex justify-center flex-wrap w-full lg:w-[60%] mt-[50px] sm:mt-[125px] text-center sm:text-start;
  gap: 20px 50px;

  &__item {
    @apply flex flex-col w-[150px];
  }
}
</style>
