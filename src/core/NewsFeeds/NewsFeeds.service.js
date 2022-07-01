import serverHttp from "../httpClient";
import { NewsFeedsModeling, PostModeling } from "./NewsFeeds.model";

export const getNewsFeeds = async () => {
  const { data } = await serverHttp.get("/");
  console.log(data);
  return NewsFeedsModeling(data);
};

export const getPostById = async (postId) => {
  const { data } = await serverHttp.get(`/${postId}`);
  console.log(data);
  return PostModeling(data);
};

export const savePost = async (payload) => await serverHttp.post("/createPost", payload);
