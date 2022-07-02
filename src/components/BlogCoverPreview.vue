<template>
  <div class="modal" ref="modal">
    <div class="modal-content">
      <close @click="closePreview" class="icon" />
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
            <aside class="post__meta col-span-10 sm:col-span-3">
              <div class="post__author-info">
                <img
                  src="../assets/avtar.jpg"
                  class="rounded-full w-14"
                  alt=""
                />
                <div class="post__author-info__name py-3">
                  <span class="font-bold">mohanad Mostafa</span>
                  <span class="text-gray-500">@mohhand</span>
                </div>
              </div>
            </aside>
            <div class="main-content col-span-10 sm:col-span-7">
              <div class="post__image">
                <img :src="blogCoverPhoto" class="h-64 rounded-lg" alt="" />
              </div>
              <div class="post-details py-5">
                <p class="font-semibold text-gray-600">
                 {{BlogBrief}}
                </p>
                <a href="" class="text-sm underline">Read More</a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import close from "../assets/Icons/times-circle-light.svg";
export default {
  components: {
    close,
  },
  methods: {
    handleClick() {
      this.$router.push("/post");
    },
    closePreview() {
      this.$store.commit("openPhotoPreview");
    },
  },
  computed: {
    blogCoverPhoto() {
      return this.$store.state.blogPhotoFileURL;
    },
    blogTitle() {
      return this.$store.state.blogTitle;
    },
    blogHTML() {
      return this.$store.state.blogHTML;
    },
    BlogBrief() {
      return this.$store.state.blogBrief;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-content {
    display: flex;
    justify-content: center;
    border-radius: 12px;
    background-color: #fff;
    position: relative;
    height: 600px;
    width: 600px;
    padding: 50px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    .icon {
      width: 24px;
      height: auto;
      cursor: pointer;
      font-size: 24px;
      position: absolute;
      top: 15px;
      right: 15px;
      color: #303030;
    }
  }
  .post {
  }
  .post-header {
    @apply border-b-2 border-black pb-5 mb-8;
  }
  .post-header_title {
    @apply font-medium text-2xl;
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
}
</style>
