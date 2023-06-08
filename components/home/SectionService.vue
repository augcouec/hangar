<template>
  <div class="container">
    <h3>{{ title }}</h3>

    <div class="content_container">
      <div class="text_container">
        <h4>{{ subtitle }}</h4>
        <p>
          {{ description }}
        </p>
        <nuxt-link to="/services">{{ bt_text }}</nuxt-link>
      </div>
      <div class="img_container">
        <img :src="image_ser" alt="" />
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

const res = data._rawValue.stories;
const dataclean = res.filter((story) => story.name === 'service')[0].content;
const title = dataclean.title;
const subtitle = dataclean.subtitle;
const description = dataclean.description;
const bt_text = dataclean.bt_text;
const image_ser = dataclean.img.filename;
</script>
<style lang="scss" scoped>
.container {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 10vh 0;

  h3 {
    text-transform: uppercase;
    color: $color-grey;
    margin: 0 0 3em 3%;
  }
}
.content_container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text_container {
  width: 45%;
  display: flex;
  flex-direction: column;
  * {
    margin: 1rem 0;
  }

  h4 {
    font-size: 2em;
    font-family: $font-serif, serif;
    text-transform: capitalize;
    color: $color-grey;
  }
  p {
    color: $color-grey-light;
    width: 60%;
    font-family: $font-text;
  }
  a {
    text-decoration: none;
    padding: 1em;
    border: solid 1px $color-grey;
    color: $color-grey;
    width: 50%;
    text-align: center;
    text-transform: uppercase;
  }
}
.img_container {
  width: 45%;
  img {
    width: 100%;
    max-height: 50vh;
    object-fit: cover;
  }
}
</style>
