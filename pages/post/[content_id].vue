<script lang="ts" setup>
import { ConfigController } from "~/composables/config/config";
import { LinkController } from "~/composables/config/link";
import type { Blog } from "~~/types/blog";

const {
  params: { content_id },
} = useRoute();

const link = LinkController();

const { data: blog } = await useMicroCMSGetListDetail<Blog>({
  endpoint: "blogs",
  contentId: Array.isArray(content_id) ? content_id[0] : content_id,
});

useHead({
  title: 'お知らせ'
})

const modal_message = ref<string>("");
const modal_memory = ref<string>("");
const config = ConfigController();

const isModalOpen = ref(false);

const openModal = (): void => {
    isModalOpen.value = true;
};

const closeModal = (): void => {
    isModalOpen.value = false;
};

const flyLink = (): void => {
    location.href = modal_memory.value;
}

const bankInfomation = (): void => {
    modal_message.value = config.bankInfo;
    modal_memory.value = "";
    openModal();
}

const formattedDate = (datetime: string): string => {
    const date = new Date(datetime);
    try {
        const formatted_Date = date.toISOString().split('T')[0].replace(/-/g, '/');
        return formatted_Date;
    } catch(e) {
        return "Time Format Error";
    }
}

</script>
<template>
    <div class="blog">
        <div class="blog-container">
            <ol class="breadcrumb" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope
                    itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="/">
                        <span itemprop="name">ホーム</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>

                <li itemprop="itemListElement" itemscope
                    itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="/post">
                        <span itemprop="name">お知らせ</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>

                <li itemprop="itemListElement" itemscope
                    itemtype="https://schema.org/ListItem">
                        <a itemprop="item":href="'/post/'+$route.params.content_id">
                            <span itemprop="name">{{ blog?.title }}</span>
                        </a>
                    <meta itemprop="position" content="3" />
                </li>
            </ol>
            <h1 class="title">{{ blog?.title }}</h1>
            <p class="publishedAt">{{ formattedDate(blog?.publishedAt ?? blog?.createdAt) }} に更新</p>
            <div class="contents" v-html="blog?.content">
            </div>
            <h2 class="h2">各種支援一覧</h2>
            <div class="fundingList">
                <a class="paypay" @click="link.paypay">
                    <img src="/paypay.svg">
                    <p>PayPay</p>
                </a>
                <a class="bankTransfer" @click="bankInfomation">
                    <img src="/cashcard.svg">
                    <p>銀行振込</p>
                </a>
            </div>
            <h2 class="h2">各種SNS一覧</h2>
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
            <h2 class="h2">その他</h2>
            <div class="otherList">
                <a class="link contact" @click="link.form">
                    <p>お問い合わせ</p>
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