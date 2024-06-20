<script setup lang="ts">
const links = ["Для фотографов", "В школах", "В детских садах", "Контакты"];
</script>

<template>
  <header class="bg-white">
    <div class="flex items-center justify-between container h-fit py-4">
      <div class="flex items-center h-max gap-5">
        <HamburgerMenu
        :links="links"
        />
        <LogoIcon class="w-auto h-[40px]" />
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
