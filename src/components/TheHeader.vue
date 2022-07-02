<template>
  <header class="container max-w-screen-xl  md:px-12 px-6 mx-auto py-10 pb-0">
    <header class="sub_header">
      <img src="../assets/logo.png" class="w-12" alt="" />
      <div class="socail_media_links flex gap-5 items-center">
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <twitter class="w-6" />
        </a>
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <instagram class="icon w-6" />
        </a>
        <a href="https://www.facebook.com/mohhand.mohammadi" target="_blank">
          <linkedin class="icon w-6" />
        </a>
      </div>
    </header>
    <TheNavBar />
  </header>
</template>
<script>
import TheNavBar from "./TheNavBar.vue";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  components: {
    TheNavBar,
    twitter,
    instagram,
    linkedin,
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
