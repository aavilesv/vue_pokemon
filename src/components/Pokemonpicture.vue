<template>
  <div class="pokemon-container">
    <img  v-if="!showpokemon" :src="imgSrc" class="hidden-on" alt="Pokemon"/>
    <img  v-else :src="imgSrc" class="fade-in"  alt="Pokemon"/>
  </div>
</template>

<script>
export default {
  props: {
    pokemonid: {
      type: Number,
      required: true
    },
    showpokemon:{
      type: Boolean,
      required: true,
      default:false

    }
  },
  computed: {
    // esta propiedad conmutada
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonid}.svg`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  /*position: absolute;
  right: 32%;*/
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-on {
  filter: brightness(0);
}
</style>
