<template>
  <div class="home">
    <NewFeedsPost v-for="post in posts" :post="post" :key="post._id" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NewFeedsPost from "../components/NewFeedPost.vue";

export default {
  name: "Home",
  components: {
    NewFeedsPost,
  },
  data() {
    return {
      posts: null,
    };
  },
  async created() {
    console.log("home created");
    this.posts = await this.$store.dispatch("GET_NEWS_FEEDS");
    console.log("ss", this.posts);
  },
};
</script>
<style scoped lang="scss">
.home {
  @apply container mx-auto max-w-screen-xl md:px-12 px-6;
}
</style>
