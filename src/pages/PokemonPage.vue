<template lang="">
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
    <h1>¿Quién es este pokemon?</h1>
    <Pokemonpicture 
            :pokemonid="pokemon.id" 
            :showpokemon="showpokemondata"/>
    <PokemonOptions 
      :pokemons="pokemonarr"
      @selection="chearproueba($event)"
    />
    <template v-if="showanswer">
      <h2>{{messege}}</h2>
      <button  @click="newgame">Nuevo juego</button>
    </template>
    </div>
</template>
<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import Pokemonpicture from "@/components/Pokemonpicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "App",
  components: {
    PokemonOptions,
    Pokemonpicture,
  },
  data() {
    return {
      pokemonarr: [],
      pokemon: null,
      showpokemondata: false,
      showanswer: false,
      messege: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonarr = await getPokemonOptions();
      const rnint = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonarr[rnint];
    },
    chearproueba(pokemonid) {
      this.showpokemondata = true;
      this.showanswer = true;
      if (pokemonid == this.pokemon.id) {
        this.messege = `Correcto, ${this.pokemon.name}`;
      } else {
        this.messege = `Opss,era ${this.pokemon.name}`;
      }
    },
    newgame() {
      this.showpokemondata = false;
      this.showanswer = false;
      this.pokemon = null;
      this.pokemonarr = [];
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
