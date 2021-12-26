<template lang="">
<!--    @click="$emit('selection')"  este metodo esta en la clase padre -->
<div class="options-container">
    <ul>
        <li v-for="pokemo in pokemons" 
        :key="pokemo.id"
       @click="$emit( 'selection', pokemo.id )"
       >{{pokemo.name}}</li>
     
    </ul>
</div>

    <h1>Pokemon Options </h1>
</template>
<script>
export default {
  props: {
    pokemons:{
      type:Array,
      required:true
    }
  }
}
methods: {
  
}
;
</script>
<style scoped>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>