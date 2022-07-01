<template>
  <article class="post">
    <header class="post-header">
      <div class="post-header__date">
        Posted On
        <span class="font-bold">{{ post.date }}</span>
      </div>
      <h2 class="post-header_title">
        <span class="text-hightled cursor-pointer" @click="handleClick">
          {{ post.blogTitle }}
        </span>
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
          <img :src="post.blogCoverPhoto" class="w-full rounded-lg" alt="" />
        </div>
        <div class="post-details py-5" v-html="post.blogHTML">
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  async created() {
    console.log("hi", this.$route.params.id);
    const postId = this.$route.params.id;
    this.post = await this.$store.dispatch("GET_POST_ID", postId);
    console.log("x", this.post);
  },
  methods: {
    handleClick() {
      this.$router.push("/post");
    },
  },
  data() {
    return {
      post: {},
    };
  },
};
</script>
<style scoped>
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
