<script setup lang="ts">
const isActive = ref<boolean>(false);
const { links } = defineProps<{ links: string[] }>();

const lockBody = () => document.body.classList.add("lock");
const unlockBody = () => document.body.removeAttribute("class");
</script>

<template>
  <div
    @click="[(isActive = !isActive), lockBody()]"
    class="h-[24px] w-[40px] flex flex-col justify-between cursor-pointer md:hidden"
  >
    <div v-for="_ in 3" class="bg-main w-full h-1 rounded-full"></div>
  </div>
  <div class="popup" :class="{ active: isActive }">
    <div class="container flex flex-col gap-10 px-5">
      <header class="flex items-center justify-between">
        <LogoIcon class="w-auto h-10" />

        <div @click="[(isActive = !isActive), unlockBody()]">
          <i class="fa-solid fa-xmark text-white fa-3x cursor-pointer"></i>
        </div>
      </header>

      <NavigationMenuRoot>
        <NavigationMenuList
          class="flex flex-col gap-5 items-center sm:items-start"
        >
          <NuxtLink class="text-white title-text" v-for="link in links" to="/">
            {{ link }}
          </NuxtLink>
        </NavigationMenuList>
      </NavigationMenuRoot>

      <footer class="flex justify-between gap-3 flex-wrap">
        <ButtonSmallGradient
          v-for="name in [
            'Войти',
            'Создать аккаунт',
            'Подключиться как фотограф',
          ]"
          class="flex-grow"
        >
          {{ name }}
        </ButtonSmallGradient>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  @apply z-10 py-4 bg-black absolute bottom-0 h-full left-0 w-full sm:w-[80%] -translate-x-full transition-all duration-[400ms] ease-in-out;

  &.active {
    @apply translate-x-0;
  }
}
</style>
