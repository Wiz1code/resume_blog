<script setup lang="ts">
import {desc} from "../../assets/data";

const aboutRef = ref();
useSectionInView(aboutRef, "关于我");
</script>

<template>
  <section
    ref="aboutRef"
    class="max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
    id="about"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
    :delay="175"
  >
    <h2 class="text-3xl font-medium capitalize mb-8 text-center">关于我</h2>

    <p>
      {{desc}}
    </p>
  </section>
</template>
