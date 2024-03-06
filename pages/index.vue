<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ScrollTrigger } from 'gsap/all';
import { ConfigController } from '~/composables/config/config';

const {$gsap: gsap} = useNuxtApp();

let ctx: any;
let scrollY: number;
const blur: any = ref<string>("");
const scales: any = ref<string>("");
const opacity: any = ref<string>("");
const sys: any = ref<string>("sss");
const config = ConfigController();
const title = config.Title;
const description = config.Description;
const BigDescription = config.BigDescription;

const display = () => {
  gsap.fromTo(
    '.title_01',
    { 
      opacity: 0, 
      // y: 120
    },
    {
      opacity: 1,
      duration: 3,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'center 220vh', // アニメーション開始位置
          markers: true // マーカー表示
      }
    }
  );
  gsap.fromTo(
    '.container_backgrounds',
    { 
      opacity: 0, 
      // y: 120
    },
    {
      opacity: 1,
      duration: 5,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'center 220vh', // アニメーション開始位置
          markers: false // マーカー表示
      }
    }
  )
  gsap.fromTo(
    '.description',
    { 
      opacity: 0, 
      // y: 120
    },
    {
      opacity: 1,
      duration: 5,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'center 180vh', // アニメーション開始位置
          markers: false // マーカー表示
      }
    }
  )
}

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
  }
  ctx = gsap.context((self) => {
    // const boxes = self.selector('');
    let tl = gsap.fromTo(
        '.logo', 
        { opacity: 0, y:320  },
        { opacity: 1, duration: 2, y:0,  ease: 'none'}
    );
    display();
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
    <img src="/chaledou.svg" class="logo">
    <p class="aux__text">沖縄縦断の旅</p>
  </div>
  <div class="head__1">
      <img src="/fire.jpg" class="container_backgrounds">
      <h1 class="title_01">{{ title }}</h1>
      <p class="description" v-html="description">
      </p>
  </div>
  <div class="head__2">
    <img src="/okinawa.jpg" class="container_backgrounds2">
    <h1 class="title_02">沖縄縦断の挑戦者</h1>
    <div class="member">
      <div class="member__personal">
        <img src="">
        <h1 class="name">じむ</h1>
        <p class="dsc">説明文説明文説明文</p>
      </div>
      <div class="member__personal">
        <img src="">
        <h1 class="name">ひろし</h1>
        <p class="dsc">説明文説明文説明文</p>
      </div>
      <div class="member__personal">
        <img src="">
        <h1 class="name">しげとも</h1>
        <p class="dsc">説明文説明文説明文</p>
      </div>
    </div>
  </div>
  <div class="head__3">
    <div class="text">
      沖縄縦断を<br>
      リアルタイムで
    </div>
    <div class="dscript">
      沖縄縦断の状況をTikTok LIVE、インスタライブにて配信します。
    </div>
  </div>
</template>

<style scoped></style>