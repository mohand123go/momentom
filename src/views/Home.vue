<template>
  <div class="home">
    <NewFeedsPost v-for="x in 5" :key="x" />
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
};
</script>
<style scoped>
.home {
  @apply container mx-auto max-w-screen-xl md:px-12 px-6;
}
</style>
