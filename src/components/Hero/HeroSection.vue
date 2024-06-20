<script setup lang='ts'>
import BGCurves from './BGCurves.vue';
import Statictics from './Statictics.vue';
</script>

<template>
    <BGCurves class="absolute -z-10 mx-auto top-[10%] h-[900px]"/>

    <div class="container relative mt-10 sm:mt-32">
        <section class="flex flex-col items-center sm:items-start text-center sm:text-start gap-3 w-full sm:w-[700px]">
            <h1 class="h1-text uppercase">{{ $t('heroSection.title') }}</h1>
        
            <p class="subtitle-text h-fit"> <span class="text-main font-bold">Seenday</span> {{ $t('heroSection.subtitle') }} </p>

            <div class="relative sm:absolute h-fit w-[50%] top-[-15%] right-0">
                <img src="@/app/img/helper_main.png" class="z-10"/>
                <img src="@/app/img/helper_ellipse.png" class="hidden lg:absolute bottom-0 scale-110 z-[-1]"/>
            </div>

            <div class="flex gap-5 h-fit w-fit mt-10 flex-col sm:flex-row items-center sm:items-start">
                <ButtonGradient>{{ $t("buttons.join") }}</ButtonGradient>
                <ButtonAskQuestion/>
            </div>
        </section>        
        <Statictics/>
    </div>
</template>

<style lang='scss' scoped>

</style>