<template>
  <footer>
    <div class="footer">
      <nuxt-link to="/">
        <img class="logo" src="../../assets/logo_short_full.png" alt="" />
      </nuxt-link>
      <div class="footer_info">
        <ul class="menu">
          <nuxt-link to="/services">Nos services</nuxt-link>
          <nuxt-link to="/reals">Réalisations</nuxt-link>
          <nuxt-link to="/cars">Nos véhicules</nuxt-link>
          <nuxt-link to="/blog">Blog</nuxt-link>
          <nuxt-link to="/contact">Contact</nuxt-link>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  padding: 3rem;
  background-color: $color-white;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .logo {
    width: 30%;
  }

  .footer_info {
    width: 30%;
  }

  H2 {
    color: $color-grey;
    font-size: 1.5rem;
    line-height: 1;
    font-weight: 400;
    font-family: $font-heading;
  }

  .menu {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    line-height: 1.66667;
    font-family: $font-text;
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: $color-grey;
      display: inline-block;
      position: relative;
    }

    a:hover {
      text-decoration: underline;
    }
  }
}
@media (max-width: 900px) {
  .footer {
    .logo {
      width: 70%;
    }
  }
  a {
    font-size: 0.9rem;
  }
}
</style>
