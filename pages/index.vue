<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const {$gsap: gsap} = useNuxtApp();

let ctx: any;
let scrollY: number;
const blur: any = ref<string>("");
const scales: any = ref<string>("");

onMounted(() => {
  ctx = gsap.context((self) => {
    // const boxes = self.selector('');
    let tl = gsap.fromTo(
        '.logo', 
        { opacity: 0, y:320  },
        { opacity: 1, duration: 2, y:0,  ease: 'none'}
    );
  })

  const rect: any = ref();

  window.addEventListener('scroll', (event) => {
				scrollY = window.scrollY;
        blur.value = `blur(${scrollY/ 40}px)`;
        let speed: number = 5000;
        let calc: any = scrollY/speed
        scales.value = `scale(${1 + calc},${1 + calc})`
	});


})

onUnmounted(() => {
  ctx.revert();
})
</script>

<template>
  <div class="background" ref="rect" :style="{filter: blur, transform: scales}">
    <img src="../public/chaledou.svg" class="logo">
  </div>
  <div class="container">
      <h1 class="title_01">『チャレ道』とは</h1>
  </div>
</template>

<style scoped></style>
