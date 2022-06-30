<template>
  <div id="app">
    <TheHeader />
    <!-- <pre class="post-content ql-editor" v-html="content"></pre> -->
    <router-view />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      content: "",
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
* {
  font-family: "clavo", serif;
}
</style>
