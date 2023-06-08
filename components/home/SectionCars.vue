<template>
  <div class="container">
    <h3>{{ title_cars }}</h3>

    <div class="content_container">
      <div class="text_container">
        <h4>{{ subtitle_cars }}</h4>
        <p>{{ description_cars }}</p>
      </div>

      <div class="img_container">
        <swiper-container
          slides-per-view="3"
          spaceBetween="10"
          mousewheel-force-to-axis="true"
        >
          <swiper-slide
            v-for="(image, index) in images_2"
            :key="index"
            :value="image"
            ><img :src="image" alt=""
          /></swiper-slide>
        </swiper-container>
      </div>
      <div class="text_container">
        <p>{{ description_cars }}</p>
        <nuxt-link to="cars"> {{ bt_text_cars }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script setup>
import { register } from 'swiper/element/bundle';
register();
const { data, pending, error, refresh } = await useAsyncData('stories', () =>
  $fetch(
    'https://api.storyblok.com/v2/cdn/stories?token=y4M1FLX1NYiAH6AVxnwdUgtt'
  )
);
const res = data._rawValue.stories;
const datacars = res.filter((story) => story.slug === 'cars')[0].content;
const title_cars = datacars.title;
const subtitle_cars = datacars.subtitle;
const description_cars = datacars.description;
const bt_text_cars = datacars.bt_text;
const images_2 = datacars.images.map(({ filename }) => filename);
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
  margin-top: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
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
}

.text_container {
  width: 80%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  h4 {
    font-size: 3em;
    font-family: $font-serif, serif;
    text-transform: capitalize;
    color: $color-grey;
    width: 40%;
    margin-bottom: 1em;
    font-family: $font-serif;
  }
  p {
    color: $color-grey-light;
    width: 34%;
    text-align: justify;
    font-size: 1rem;
    margin-bottom: 1em;
    margin-bottom: 1rem;
    font-family: $font-text;
    justify-self: flex-start;
  }
}
.img_container {
  margin: 2rem 0;
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
