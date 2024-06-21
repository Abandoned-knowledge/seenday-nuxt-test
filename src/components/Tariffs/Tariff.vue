<script setup lang="ts">
import { type ITariff } from "@/shared/interfaces/interfaces";
const props = defineProps<ITariff>();
</script>

<template>
  <article class="card" :class="{ card__preferred: props.preferred }">
    <h2 class="h2-text text-center">{{ props.name }}</h2>
    <ul class="flex flex-col gap-4">
      <li class="body-text flex gap-2" v-for="benefit in props.benefits">
        <i class="fa fa-check" aria-hidden="true"></i>
        {{ benefit }}
      </li>
    </ul>

    <button class="button title-text" v-if="!props.isSelectPerYear">
      {{ props.pricePerMonth.perMonth }} Р/мес
    </button>

    <div v-else class="flex flex-col items-center gap-3">
      <button class="button title-text flex flex-col items-center gap-1">
        {{ props.pricePerMonth.perYear.value }} Р/мес
        <span class="body-text body-text_sm"> При оплате за год </span>
      </button>
      <p class="body-text">
        Экономия в год: {{ props.pricePerMonth.perYear.saving }} руб.
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.card {
  @apply flex flex-grow flex-col gap-5 rounded bg-gradient-to-br from-[#723087AA] to-[#C15FA4AA] p-5 lg:p-10 text-white;

  &__preferred {
    @apply border-[3px] border-accent bg-gradient-to-t from-[#766EB6AA] to-[#A584E1AA];
  }
}

.button {
  @apply w-full rounded border-[3px] border-accent py-3;
}
</style>
