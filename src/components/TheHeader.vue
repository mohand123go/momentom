<template>
  <header class="container mx-auto py-10 pb-0">
    <header class="sub_header">
      <img src="../assets/logo.png" class="w-12" alt="" />
      <div class="socail_media_links">
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <img src="../assets/facebook.png" class="w-12" alt="" />
        </a>
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <img src="../assets/facebook.png" class="w-12" alt="" />
        </a>
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <img src="../assets/facebook.png" class="w-12" alt="" />
        </a>
      </div>
    </header>
    <TheNavBar />
  </header>
</template>
<script>
import TheNavBar from "./TheNavBar.vue";
export default {
  components: {
    TheNavBar,
  },
};
</script>
<style scoped>
.sub_header {
  @apply flex justify-between;
}
.socail_media_links {
  @apply flex align-middle;
}

a img {
  @apply block;
}
</style>
>
