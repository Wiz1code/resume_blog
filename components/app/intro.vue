<script setup lang="ts">
// @ts-ignore
import {name, typedDes, avatar, github_link} from "~/assets/data";
import Typed from "typed.js";

const introRef = ref();
useSectionInView(introRef, "首页", 0.2);

const initTyped = () => {
  new Typed("#introduce", {
    strings: typedDes,
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  });
};

onMounted(() => {
  initTyped();
});

</script>

<template>
  <section
    ref="introRef"
    class="mb-10 max-w-[50rem] text-center sm:mb-0 scroll-mt-28 pt-[7rem]"
    id="home"
  >
    <div class="flex items-center justify-center">
      <div class="relative">
        <div data-aos="zoom-in">
          <NuxtImg
            :src=avatar
            alt="avatar"
            width="250"
            height="250"
            quality="95"
            class="h-28 w-28 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
        <span
          class="absolute text-4xl bottom-0 right-0 hover:rotate-2 cursor-pointer"
          data-aos="zoom-in"
          data-aos-delay="200"
          @mouseover="play"
        >
          👋
        </span>
      </div>
    </div>

    <h1
      class="mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5] sm:text-4xl"
      data-aos="fade-up"
    >
      <div
        class="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
          {{ name }}
        </h1>

        <div class="text-center">
          <h2
            class="text-center text-2xl sm:text-5xl lg:text-4xl lg:leading-normal font-extrabold"
          >
            <span id="introduce"> </span>
          </h2>
        </div>
      </div>
      <p>代码行间，提灯向前！</p>
    </h1>

    <div
      class="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <a
        class="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        :href=github_link
        target="_blank"
      >
        <Icon name="mdi:github-box" />
      </a>
    </div>
  </section>
</template>
