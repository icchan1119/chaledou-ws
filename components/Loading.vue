<script lang="ts" setup>
import { ref,onMounted } from 'vue';
// デプロイテスト
const piliod = ref<string>('');
const load = ref<number>(0);
onMounted(() => {
  setInterval(() => {
    load.value += 1;
    piliod.value += '.';
    if (load.value == 4){
      piliod.value = '';
      load.value = 0;
    }
  },200)
})
</script>

<template>
  <div id="root">
    <div id="load">
        <div class="loader"></div>
        <p>Now Loading...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
    $loading-color: #5a5a5a;
    $loading-sub-color: #fff;
    $loading-size: 80px;
    $loading-border-width: 6px;
    $loading-speed: 1s;
  #root{
    background-color: #000000;
    width: 100%;
    height: 100vh;
    position: fixed;
    top :0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    overflow: hidden;

    #load {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 40vh;
      margin: auto;
      width: 182px;
      height: 40px;

      p {
        color: #fff;
        display: block;
        width: 160px;
        text-align: center;
        position: absolute;
        top:280px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        font-size: 24px;
        font-family: "Ubuntu", sans-serif;
        font-weight: 300;
        font-style: normal;
      }

      .loader {
            position: fixed;
            top: calc(50% - $loading-size / 2);
            left: calc(50% - $loading-size / 2);
            z-index: 1;
            width: $loading-size;
            height: $loading-size;
            box-sizing: border-box;
            border: solid $loading-border-width transparent;
            border-top-color: $loading-color;
            border-left-color: $loading-color;
            border-bottom-color: $loading-color;
            border-right-color: $loading-sub-color;
            border-radius: 50%;
            -webkit-animation: loading $loading-speed linear infinite;
            animation: loading $loading-speed linear infinite;
        }

        @-webkit-keyframes loading {
            0% {
             -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
        @keyframes loading {
            0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
            }       
            100% {
                -webkit-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }
  }
</style>
