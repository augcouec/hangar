<template>
  <div class="container">
    <h3>Blog Defender</h3>
    <div class="content_container">
      <div class="blog_post">
        <h5>{{ dataArt1.title }}</h5>
        <p>{{ dataArt1.content.substring(0, 200) + '..' }}</p>
        <nuxt-link to="/Blog/article1">Voir plus</nuxt-link>
      </div>
      <div class="blog_post">
        <h5>{{ dataArt2.title }}</h5>
        <p>{{ dataArt2.content.substring(0, 200) + '..' }}</p>
        <nuxt-link to="/Blog/article1">Voir plus</nuxt-link>
      </div>
      <div class="blog_post">
        <h5>{{ dataArt3.title }}</h5>
        <p>{{ dataArt3.content.substring(0, 200) + '..' }}</p>
        <nuxt-link to="/Blog/article1">Voir plus</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
const { data, pending, error, refresh } = await useAsyncData('stories', () =>
  $fetch(
    'https://api.storyblok.com/v2/cdn/stories?token=y4M1FLX1NYiAH6AVxnwdUgtt'
  )
);
const articlescontent = data._rawValue.stories;
const dataArt1 = articlescontent.filter((story) => story.slug === 'article1')[0]
  .content;
const dataArt2 = articlescontent.filter((story) => story.slug === 'article2')[0]
  .content;
const dataArt3 = articlescontent.filter((story) => story.slug === 'article3')[0]
  .content;
</script>
<style lang="scss" scoped>
.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 0;
  h3 {
    text-transform: uppercase;
    color: $color-grey;
    margin: 0 0 3em 3%;
  }
}
.content_container {
  display: flex;
  .blog_post {
    width: 33%;
    padding: 3em;
    border: 1px solid $color-grey;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
      font-family: $font-serif;
      font-size: 1.5em;
      margin: 0 0 2em 0;
      width: 40%;
      text-transform: uppercase;
      color: $color-grey;
    }

    p {
      margin: 0 0 3em 0;
      width: 45%;
      font-family: $font-text;
    }

    a {
      text-decoration: none;
      padding: 1em;
      border: 1px solid $color-grey;
      color: $color-grey;
      width: 31%;
      text-align: center;
      text-transform: uppercase;
      margin: 1rem 0;
      font-family: $font-text;
    }
  }
}
</style>
