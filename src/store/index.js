import Vue from "vue";
import Vuex from "vuex";
import { getNewsFeeds, savePost, getPostById } from "../core/NewsFeeds/NewsFeeds.service";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogPhotoPreview: false,
    blogPhotoFileURL: null,
    blogTitle: "",
    blogHTML: "",
    blogBrief: ""
  },
  mutations: {
    newBlogPost(state, payload) {
      state.blogHTML = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
    updateBlogTitle(state, payload) {
      state.blogTitle = payload;
    },
    updateBlogBrief(state, payload) {
      state.blogBrief = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    setBlogState(state, payload) {
      state.blogTitle = payload.blogTitle;
      // state.blogHTML = payload.blogHTML;
      // state.blogPhotoFileURL = payload.blogCoverPhoto;
      // state.blogPhotoName = payload.blogCoverPhotoName;
    },
  },
  actions: {
    GET_NEWS_FEEDS: async () => await getNewsFeeds(),
    GET_POST_ID: async (_, postId) => await getPostById(postId),
    SAVE_POST: async (_, payload) => await savePost(payload),
  },
  modules: {},
});
