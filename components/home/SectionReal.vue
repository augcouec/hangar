<script setup>
import { register } from 'swiper/element/bundle';
register();
</script>

import { register } from 'swiper/element/bundle';

<template>
  <div class="container">
    <h3>Nos réalisations</h3>

    <div class="content_container">
      <div class="img_container">
        <swiper-container
          slides-per-view="1.5"
          spaceBetween="10"
          reverseDirection="true"
          initialSlide="3"
          mousewheel-force-to-axis="true"
        >
          <swiper-slide
            ><img src="../../assets/AGENCEPOLY-04988.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="../../assets/AGENCEPOLY-04988.jpg" alt=""
          /></swiper-slide>
          <swiper-slide
            ><img src="../../assets/AGENCEPOLY-04988.jpg" alt=""
          /></swiper-slide>
        </swiper-container>
      </div>
      <div class="text_container">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </p>
        <nuxt-link to="reals"> Voir Nos Réalisations</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 3em;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    text-transform: uppercase;
    color: $color-grey;
    margin: 0 0 3em 3%;
  }
}
.content_container {
  margin-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text_container {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;

  a {
    text-decoration: none;
    padding: 1em;
    border: 1px solid $color-grey;
    color: $color-grey;
    width: 60%;
    text-align: center;
    text-transform: uppercase;
  }
  p {
    color: $color-grey-light;
    width: 65%;
    text-align: justify;
    font-size: 1.2rem;
    margin-bottom: 1em;
    font-weight: 400;
    justify-self: flex-start;
  }
}
.img_container {
  width: 55%;
  img {
    width: 100%;
  }
}
</style>
