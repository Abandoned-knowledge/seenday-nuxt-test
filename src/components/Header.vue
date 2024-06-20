<script setup lang="ts">
const links = ["Для фотографов", "В школах", "В детских садах", "Контакты"];
</script>

<template>
  <header class="bg-white">
    <div class="container flex items-center justify-between h-fit py-4">
      <div class="flex items-center h-max gap-4">
        <HamburgerMenu :links="links"/>
        <LogoIcon class="w-auto h-8" />
      </div>

      <NavigationMenuRoot class="hidden lg:inline-block">
        <NavigationMenuList class="flex gap-6">
          <NavigationMenuItem v-for="link in links">
            <NuxtLink to="/" class="text-black body-text hover:text-grey">{{
              link
            }}</NuxtLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenuRoot>

      <div class="flex gap-3">
        <ButtonSmallSolid> Войти </ButtonSmallSolid>
        <ButtonSmallGradient>
          <i class="fa-solid fa-user-plus inline-block lg:hidden"></i>
          <span class="hidden lg:inline-block"> Создать аккаунт </span>
        </ButtonSmallGradient>
      </div>
    </div>
  </header>
</template>
