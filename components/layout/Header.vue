<template>
  <header :class="{ change_color: scrollPosition > 50 }">
    <nuxt-link to="/">
      <img class="logo" src="../../assets/logo_short_full.png" alt="" />
    </nuxt-link>
    <ul class="menu">
      <nuxt-link to="/services">Nos services</nuxt-link>
      <nuxt-link to="/reals">Réalisations</nuxt-link>
      <nuxt-link to="/cars">Nos véhicules</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/contact" class="border">Contact</nuxt-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      scrollPosition: null,
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="scss" scoped>
header {
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  // -webkit-box-shadow: 0px 10px 13px 0px rgba(228, 228, 228, 0.82);
  // box-shadow: 0px 10px 13px 0px rgba(228, 228, 228, 0.82);
  background-color: transparent;
  position: fixed;
  left: 0; /* top left corner should start at leftmost spot */
  top: 0; /* top left corner should start at topmost spot */
  z-index: 200; /* high z index so other content scrolls underneath */
  height: 50px;
}
.logo {
  width: 20%;
}
.change_color {
  background-color: $color-white;
}
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;

  a {
    text-decoration: none;
    color: $color-grey;
    text-transform: uppercase;
  }
}
.border {
  border: solid 1px;
  padding: 1em;
}
border:hover {
  background-color: $color-black;
  color: $color-white;
}
@media (max-width: 900px) {
  a {
    width: 60%;
  }
  .logo {
    width: 80%;
  }
  .menu {
    width: 80%;

    a {
      font-size: 0.5rem;
      width: 40%;
    }
  }
}
</style>
