<template>
  <div class="post-view">
    <article class="post">
      <header class="post-header">
        <div class="post-header__date">
          Posted On
          <span class="font-bold">April 15 2019</span>
        </div>
        <h2 class="post-header_title">
          <span class="text-hightled cursor-pointer" @click="handleClick">{{
            blogTitle
          }}</span>
        </h2>
      </header>
      <div class="post-body">
        <aside class="post__meta col-span-10 sm:col-span-2">
          <div class="post__author-info">
            <figure>
              <img src="../assets/avtar.jpg" class="rounded-full w-14" alt="" />
            </figure>
            <div class="post__author-info__name py-3">
              <span class="font-bold">mohanad Mostafa</span>
              <span class="text-gray-500">@mohhand</span>
            </div>
          </div>
        </aside>
        <div class="main-content col-span-10 sm:col-span-8">
          <div class="post__image">
            <img :src="blogCoverPhoto" class="w-full rounded-lg" alt="" />
          </div>
          <div class="post-details py-5">
            <div v-html="blogHTML"></div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  methods: {
    handleClick() {
      this.$router.push("/post");
    },
  },
  computed: {
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
  },
};
</script>

<style lang="scss" scoped>
.post__sub-title {
  @apply text-4xl pb-5;
}

.post__pragraph {
  @apply text-xl leading-7;
}
.post {
  @apply container mx-auto max-w-screen-xl md:px-12 px-6;
  @apply py-14;
}
.post-header {
  @apply border-b-2 border-black pb-5 mb-8;
}
.post-header_title {
  @apply font-medium text-4xl;
  font-family: "clavo", serif;
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
