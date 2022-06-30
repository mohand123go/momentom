import serverHttp from "../httpClient";

export const getNewsFeeds = async () => {
  const response = await serverHttp.get("/");
  console.log(response.data);
  return response.data;
};
