<template>
  <div
    :class="{ change_size: scrollPosition > 100 }"
    class="header_container"
  ></div>
</template>

<script>
export default {
  name: 'Hero',
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

<style lang="scss">
.header_container {
  background: url(' ../../assets/header.png');
  background-size: cover;
  width: 90%;
  height: 90vh;
  margin: 10% 5%;
  transition: 1s;
}
.change_size {
  width: 100%;
  margin: 10% 0;
  transition: 1s;
}
</style>
