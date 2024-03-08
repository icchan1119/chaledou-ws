<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ScrollTrigger } from 'gsap/all';
import { ConfigController } from '~/composables/config/config';
import { LinkController } from '~/composables/config/link';
import type { Blog } from '~/types/blog';
import { da } from 'vuetify/locale';

const {$gsap: gsap} = useNuxtApp();

useHead({
  title: 'HOME'
})

let ctx: any;
let scrollY: number;
const blur: any = ref<string>("");
const scales: any = ref<string>("");
const opacity: any = ref<string>("");
const sys: any = ref<string>("sss");
const overflow: any = ref<string>("auto");
const config = ConfigController();
const link = LinkController();
const title = config.Title;
const description = config.Description;
const S_description = config.S_Description;
const introduction = config.introduction;
const S_introduction = config.S_introduction;

const modal_message = ref<string>("");
const modal_memory = ref<string>("");

const isModalOpen = ref(false);

const openModal = () => {
    isModalOpen.value = true;
};

const closeModal = () => {
    isModalOpen.value = false;
};

const flyLink = () => {
    location.href = modal_memory.value;
}

const bankInfomation = () => {
    console.log('open');
    modal_message.value = config.bankInfo;
    modal_memory.value = "";
    openModal();
}

const display = (): void => {
  gsap.fromTo(
    '.title_01',
    { 
      opacity: 0, 
      // y: 120
    },
    {
      opacity: 1,
      duration: 1,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: `center ${is_smartphone() ? 250 : 220}vh`, // アニメーション開始位置
          markers: false // マーカー表示
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
      duration: 2,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: `center ${is_smartphone() ? 250 : 220}vh`, // アニメーション開始位置
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
      duration: 1,
      // y:0,
      scrollTrigger: {
          trigger: '.title_01', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'center 180vh', // アニメーション開始位置
          markers: false // マーカー表示
      }
    }
  )
  gsap.fromTo(
    ['.title_02','.ceo_introduction'],
    { 
      opacity: 0, 
      // y: 120
    },
    {
      opacity: 1,
      duration: 2,
      // y:0,
      scrollTrigger: {
          trigger: '.title_02', // 要素".a"がビューポートに入ったときにアニメーション開始
          start: 'center 180vh', // アニメーション開始位置
          markers: false // マーカー表示
      }
    }
  )
}
const is_smartphone = (): boolean => {
  if (process.client){
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile|opera mini/i.test(userAgent);
  } else {
    return false;
  }
}

const scrollToElement = () => {
  const element = document.getElementById('target-elements');
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'center',
    });
  }
};

const is_smartphones = ref<boolean>(is_smartphone());

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
    let tl2 = gsap.fromTo(
        '.first_backgrounds', 
        { opacity: 0,  },
        { opacity: 1, duration: 2,  ease: 'none'}
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
        console.log(overflow.value);
        if (scrollY > 1813){
          overflow.value = "hidden";
          // scrollToElement('introduction');
        }
	});


})

onUnmounted(() => {
  ctx.revert();
})

const { data: blogs } = await useMicroCMSGetList<Blog>({
  endpoint: "blogs",
});
</script>

<template>
  <div class="abso_btn" @click="scrollToElement">
    挑戦を応援する！
  </div>
  <div class="background" ref="rect" :style="{filter: blur, transform: scales}">
    <img src="/background.jpg" class="first_backgrounds">
    <img src="/chaledou.png" class="logo">
  </div>
  <div class="head__1">
      <img src="/fire.jpg" class="container_backgrounds">
      <h1 class="title_01">{{ title }}</h1>
      <p class="description" v-html="description" v-if="!is_smartphones">
      </p>
      <p class="description" v-html="S_description" v-else-if="is_smartphones">
      </p>
  </div>
  <div class="head__2">
    <!--<img src="/okinawa.jpg" class="container_backgrounds2">-->
    <h1 class="title_02">代表挨拶</h1>
    <div class="ceo_introduction">
      <div class="half-block">
        <div class="face">
          <img src="/jimface.jpg" class="jimface">
        </div>
        <div class="name">
          <p class="small_cap">チャレ道代表</p>
          <p>大林 治夢</p>
        </div>
      </div>
      <div class="half-block">
        <div class="description-half-words-block" v-html="introduction" v-if="!is_smartphones">
        </div>
        <div class="description-half-words-block" v-html="S_introduction" v-if="is_smartphones">
        </div>
      </div>
    </div>
  </div>
  <div class="head__3">
    <div class="container">
      <h2>お知らせ</h2>
      <div class="postList">
        <li v-for="blog in blogs?.contents">
          <a :href="'/post/' + blog.id">{{ blog.title }}</a>
        </li>
        <a class="allwatcher" v-if="blogs?.contents">全部を見る</a>
        <p v-if="!blogs?.contents">まだ投稿はしていません。</p>
      </div>
      <h2>各種支援一覧</h2>
      <div class="fundingList" id="target-elements">
        <a class="paypay" @click="link.paypay">
          <img src="/paypay.svg">
          <p>PayPay</p>
        </a>
        <a class="bankTransfer" @click="bankInfomation">
          <img src="/cashcard.svg">
          <p>銀行振込</p>
        </a>
      </div>
      <h2>各種SNS一覧</h2>
      <div class="snsList">
        <a class="link tiktok" @click="link.tiktok">
          <img src="/tiktok.svg">
          <p>Tik Tok</p>
        </a>
        <a class="link x" @click="link.twitter">
          <img src="/xlogo.svg">
          <p>X</p>
        </a>
        <a class="link instagram" @click="link.instagram">
          <img src="/instagram.svg">
          <p>Instagram</p>
        </a>
        <a class="link facebook" @click="link.facebook">
          <img src="/facebook.png">
          <p>Facebook</p>
        </a>
        <a class="link youtube" @click="link.youtube">
          <img src="/youtube.svg">
          <p>YouTube</p>
        </a>
      </div>
      <div class="block"></div>
    </div>
  </div>
  <modal :showModal="isModalOpen" @update:showModal="closeModal">
    <!-- モーダルの中身 -->
    <p>{{ modal_message }}</p>
    <div class="nuxt-modal-btn">
      <button class="btn true" @click="closeModal" v-if="!modal_memory">OK</button>
      <button class="btn true" @click="flyLink" v-if="modal_memory">YES</button>
      <button class="btn" @click="closeModal" v-if="modal_memory">NO</button>
    </div>
  </modal>
  <div class="footer">
    <small>©️ 2024 チャレ道</small>
  </div>
</template>

<style scoped></style>