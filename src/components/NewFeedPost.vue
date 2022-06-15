<template>
  <article class="post">
    <header class="post-header">
      <div class="post-header__date">
        Posted On
        <span class="font-bold">April 15 2019</span>
      </div>
      <h2 class="post-header_title">
        <span class="text-hightled"
          >Welcome To The Anti-Racism Movement—heres What Youve Missed</span
        >
      </h2>
    </header>
    <div class="post-body">
      <aside class="post__meta col-span-10 sm:col-span-3">
        <div class="post__author-info">
          <img src="../assets/avtar.jpg" class="rounded-full w-14" alt="" />
          <div class="post__author-info__name py-3">
            <span class="font-bold">mohanad Mostafa</span>
            <span class="text-gray-500">@mohhand</span>
          </div>
        </div>
      </aside>
      <div class="main-content col-span-10 sm:col-span-7">
        <div class="post__image">
          <img
            src="../assets/post_image.png"
            class="w-full rounded-lg"
            alt=""
          />
        </div>
        <div class="post-details py-5">
            <p class="font-semibold text-gray-600">A handy list of things that you’re going to need to catch up on. Buck up, because it won’t be easy.</p>
            <a href="" class="text-sm underline">Read More</a>
        </div>
      </div>
    </div>
  </article>
</template>
<style scoped>

.post{
    @apply py-14;
}
.post-header {
  @apply border-b-2 border-black pb-5 mb-8;
}
.post-header_title {
  @apply font-medium text-4xl;
  font-family: "clavo", serif;
}

.post__author-info__name {
  @apply flex flex-col;
}
.post-body {
  @apply grid grid-cols-10;
}
.text-hightled {
  background-image: -webkit-linear-gradient(bottom, #66cccc 45%, #fff 45%);
}
</style>
