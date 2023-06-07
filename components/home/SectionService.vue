<template>
  <div class="container">
    <h3>Nos Services</h3>

    <div class="content_container">
      <div class="text_container">
        <h4>Découvrez tous nos services</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <nuxt-link to="/services">Découvrez nos Services</nuxt-link>
      </div>
      <div class="img_container">
        <img src="../../assets/AGENCEPOLY-04988.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.container {
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
  }
}
</style>
