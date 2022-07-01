<template>
  <div class="create-post">
    <BlogCoverPreview v-show="this.$store.state.blogPhotoPreview" />
    <Loading v-show="loading" />
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <input
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            @change="fileChange"
            accept=".png, .jpg, ,jpeg"
          />
          <button
            @click="openPreview"
            class="preview"
            :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }"
          >
            Preview Photo
          </button>
          <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor
          :editorOptions="editorSettings"
          v-model="blogHTML"
          useCustomImageHandler
          @image-added="imageHandler"
        />
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
        <router-link class="router-button" :to="{ name: 'BlogPreview' }"
          >Post Preview</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import BlogCoverPreview from "../components/BlogCoverPreview";
import Loading from "../components/Loading";
import Quill from "quill";
import axios from "axios";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);
// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
export default {
  name: "CreatePost",
  data() {
    return {
      file: null,
      error: null,
      errorMsg: null,
      loading: null,
      editorSettings: {
        modules: {
          imageResize: {},
        },
      },
    };
  },
  components: {
    BlogCoverPreview,
    Loading,
  },
  methods: {
    async fileChange(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("postImg", file);

      axios({
        url: "http://localhost:3000/upload",
        method: "POST",
        data: formData,
      })
        .then(({ data: { path } }) => {
          const url = `http://localhost:3000/${path}`;
          this.file = url
          this.$store.commit("createFileURL", url);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    openPreview() {
      console.log("gooooood");
      this.$store.commit("openPhotoPreview");
    },

    async imageHandler(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("postImg", file);

      axios({
        url: "http://localhost:3000/upload",
        method: "POST",
        data: formData,
      })
        .then(({ data: { path } }) => {
          const url = `http://localhost:3000/${path}`;
          Editor.insertEmbed(cursorLocation, "image", url);
          resetUploader();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async uploadBlog() {
      if (this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
        if (this.file) {
          this.loading = true;
          const timestamp = Date.now();
          const payload = {
            blogHTML: this.blogHTML,
            blogCoverPhoto: this.file,
            blogTitle: this.blogTitle,
            profileId: 1,
            date: timestamp,
          };

          try {
            await this.$store.dispatch("SAVE_POST", payload);
            this.loading = false;
          } catch (err) {
            this.loading = false;
            console.log(err);
          }
        }
      }
      //     const storageRef = firebase.storage().ref();
      //     const docRef = storageRef.child(
      //       `documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`
      //     );
      //     docRef.put(this.file).on(
      //       "state_changed",
      //       (snapshot) => {
      //         console.log(snapshot);
      //       },
      //       (err) => {
      //         console.log(err);
      //         this.loading = false;
      //       },
      //       async () => {
      //         const downloadURL = await docRef.getDownloadURL();
      //         const timestamp = await Date.now();
      //         const dataBase = await db.collection("blogPosts").doc();
      //         await dataBase.set({
      //           blogID: dataBase.id,
      //           blogHTML: this.blogHTML,
      //           blogCoverPhoto: downloadURL,
      //           blogCoverPhotoName: this.blogCoverPhotoName,
      //           blogTitle: this.blogTitle,
      //           profileId: this.profileId,
      //           date: timestamp,
      //         });
      //         await this.$store.dispatch("getPost");
      //         this.loading = false;
      //         this.$router.push({
      //           name: "ViewBlog",
      //           params: { blogid: dataBase.id },
      //         });
      //       }
      //     );
      //     return;
      // }
      // this.error = true;
      // this.errorMsg = "Please ensure you uploaded a cover photo!";
      // setTimeout(() => {
      //   this.error = false;
      // }, 5000);
      // return;
      // }
      // this.error = true;
      // this.errorMsg = "Please ensure Blog Title & Blog Post has been filled!";
      // setTimeout(() => {
      //   this.error = false;
      // }, 5000);
      // return;
    },
  },
  computed: {
    profileId() {
      return this.$store.state.profileId;
    },
    // blogCoverPhotoName() {
    //   return this.$store.state.blogPhotoName;
    // },
    blogTitle: {
      get() {
        return this.$store.state.blogTitle;
      },
      set(payload) {
        this.$store.commit("updateBlogTitle", payload);
      },
    },
    blogHTML: {
      get() {
        return this.$store.state.blogHTML;
      },
      set(payload) {
        this.$store.commit("newBlogPost", payload);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.create-post {
  @apply container mx-auto max-w-screen-xl md:px-12 px-6;
  position: relative;
  height: 100%;

  button {
    margin-top: 0;
  }

  .router-button {
    text-decoration: none;
    color: #fff;
  }

  label,
  button,
  .router-button {
    transition: 0.5s ease-in-out all;
    align-self: center;
    font-size: 14px;
    cursor: pointer;
    border-radius: 20px;
    padding: 12px 24px;
    color: #fff;
    background-color: #303030;
    text-decoration: none;

    &:hover {
      background-color: rgba(48, 48, 48, 0.7);
    }
  }

  .container {
    position: relative;
    height: 100%;
    padding: 10px 25px 60px;
  }

  // error styling
  .invisible {
    opacity: 0 !important;
  }

  .err-message {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    color: #fff;
    margin-bottom: 10px;
    background-color: #303030;
    opacity: 1;
    transition: 0.5s ease all;

    p {
      font-size: 14px;
    }

    span {
      font-weight: 600;
    }
  }

  .blog-info {
    display: flex;
    margin-bottom: 32px;

    input:nth-child(1) {
      min-width: 300px;
    }

    input {
      transition: 0.5s ease-in-out all;
      padding: 10px 4px;
      border: none;
      border-bottom: 1px solid #303030;

      &:focus {
        outline: none;
        box-shadow: 0 1px 0 0 #303030;
      }
    }

    .upload-file {
      flex: 1;
      margin-left: 16px;
      position: relative;
      display: flex;

      input {
        display: none;
      }

      .preview {
        margin-left: 16px;
        text-transform: initial;
      }

      span {
        font-size: 12px;
        margin-left: 16px;
        align-self: center;
      }
    }
  }

  .editor {
    height: 60vh;
    display: flex;
    flex-direction: column;

    .quillWrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .ql-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: scroll;
    }

    .ql-editor {
      padding: 20px 16px 30px;
    }
  }

  .blog-actions {
    margin-top: 32px;

    button {
      margin-right: 16px;
    }
  }
}
</style>
