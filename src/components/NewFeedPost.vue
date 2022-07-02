<template>
  <article class="post">
    <header class="post-header">
      <div class="post-header__date">
        Posted On
        <span class="font-bold">{{ post.createdDate }}</span>
      </div>
      <h2 class="post-header_title">
        <span class="text-hightled cursor-pointer" @click="handleClick">{{
          post.blogTitle
        }}</span>
      </h2>
    </header>
    <div class="post-body">
      <aside class="post__meta col-span-10 sm:col-span-3">
        <div class="post__author-info">
          <img src="../assets/avtar.jpg" class="rounded-full w-14" alt="" />
          <div class="post__author-info__name py-3">
            <span class="font-bold">mohanad Mostafa</span>
            <span class="text-gray-500">@mohhand</span>
          </div>
        </div>
      </aside>
      <div class="main-content col-span-10 sm:col-span-7">
        <div
          :class="screenWidth > 450 ? 'post__image_lg' : 'post__image_sm'"
          :style="{ backgroundImage: ` url(${post.blogCoverPhoto})` }"
        >
          <!-- <img :src="post.blogCoverPhoto" class="rounded-lg" alt="" /> -->
        </div>
        <div class="post-details py-5">
          <p class="font-semibold text-gray-600">
            {{post.blogBrief}}
          </p>
          <a href="" class="text-sm underline">Read More</a>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
  props: {
    post: {
      require: true,
      type: Object,
    },
  },
  methods: {
    handleClick() {
      this.$router.push(`/post/${this.post._id}`);
    },
    onResize() {
      console.log(window.innerWidth)
      this.screenWidth = window.innerWidth
    },
  },
  data(){
    return{
      screenWidth: window.innerWidth
    }
  }
};
</script>
<style scoped>
.post {
  @apply py-14;
}
.post-header {
  @apply border-b-2 border-black pb-5 mb-8;
}
.post-header_title {
  @apply font-medium text-4xl;
  font-family: "clavo", serif;
}

.post__image_sm {
  height: min(300px, 500px);
  @apply w-full bg-cover bg-center;
}
.post__image_lg {
  height: min(50vw, 500px);
  @apply w-full bg-cover bg-center;
}

.post__author-info__name {
  @apply flex flex-col;
}
.post-body {
  @apply grid grid-cols-10;
}
.text-hightled {
  background-image: -webkit-linear-gradient(bottom, #66cccc 45%, #fff 45%);
}
</style>
