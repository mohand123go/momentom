export const NewsFeedsModeling = (payload) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const posts = payload.map((post) => ({
    ...post,
    createdDate: dateTimeFormat.format(new Date(post.date)),
  }));
  return posts;
};

export const PostModeling = (payload) => {
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return {
    ...payload,
    createdDate: dateTimeFormat.format(new Date(payload.date)),
  };
};
