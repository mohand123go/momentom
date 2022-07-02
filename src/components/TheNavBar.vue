<template>
  <div class="navbar">
    <menuIcon
      class="menu-icon"
      v-show="screenWidth <= 640"
      @click="showMenu = !showMenu"
    />
    <div class="go" v-show="showMenu || screenWidth > 640">
      <router-link to="/" class="link font-semibold">NewFeeds</router-link>
      <router-link to="/about" class="link font-semibold"
        >About Me!</router-link
      >
      <router-link to="/CreatePost" class="link font-semibold"
        >Create Post</router-link
      >
      <router-link to="/Register" class="link font-semibold"
        >Register</router-link
      >
      <router-link to="/Login" class="link font-semibold">Login</router-link>
    </div>
  </div>
</template>
<script>
import menuIcon from "../assets/Icons/bars-regular.svg";
export default {
  components: {
    menuIcon,
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
  data() {
    return {
      showMenu: false,
      screenWidth: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>
<style scoped>
.link {
  background-image: -webkit-linear-gradient(bottom, #66cccc 45%, #fff 45%);
}
.go {
  @apply flex sm:flex-row flex-col  items-center justify-center  gap-10 py-5;
}
.menu-icon {
  cursor: pointer;
  text-align: center;
  height: 35px;
  width: auto;
  border: 1px solid black;
  padding: 5px 7px;
  margin: 10px 0;
  box-shadow: none;
  border-radius: 2px;
}
</style>
