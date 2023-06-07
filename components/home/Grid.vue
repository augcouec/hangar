<template>
  <div class="grid_container">
    <div class="div1">
      <img src="../../assets/AGENCEPOLY-05022.jpg" alt="" />
    </div>
    <div class="div2">
      <img src="../../assets/AGENCEPOLY-05096.jpg" alt="" />
    </div>
    <div class="div3">
      <h2>Hangar 166</h2>
    </div>
    <div class="div4">
      <p>
        Hangar 166 est là pour vous aider à réaliser vos rêves automobiles,
        pièce par pièce. Les options de personnalisation vous permettent de
        réinterpréter le design d'origine et de créer quelque chose qui vous est
        propre. Nous vous aiderons à restaurer votre classique.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid_container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 0px;
}
.div1 {
  grid-area: 1 / 2 / 4 / 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.div2 {
  grid-area: 2 / 3 / 5 / 4;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.div3 {
  grid-area: 1 / 3 / 2 / 4;
  h2 {
    font-size: 3rem;
    color: $color-grey;
  }
}
.div4 {
  grid-area: 4 / 2 / 5 / 3;
}
</style>
