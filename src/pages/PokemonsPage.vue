<template>
  <div class="q-pa-md">
    <div class="migalha">
      <h2>Pokémos</h2>
      <q-breadcrumbs class="breadcrumbs">
        <q-breadcrumbs-el label="migalhas" />
        <q-breadcrumbs-el label="de pão" />
      </q-breadcrumbs>
    </div>
    <div class="container">
      <div v-for="(pokemon, index) in pokemonsPaginados" :key="index">
        <q-card class="my-card">
          <q-img :src="pokemon.img">
            <div class="absolute-bottom" style="font-size: 1rem">
              {{ pokemon.nome.charAt(0).toUpperCase() + pokemon.nome.slice(1) }}
            </div>
          </q-img>
          <q-card-section>
            <q-btn
              color="primary"
              icon="search"
              size="sm"
              :to="`/pokemon/${pokemon.id}`"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-mt-lg flex flex-center">
      <q-pagination
        v-model="pagina"
        :max="Math.ceil(pokemons.length / porPagina)"
        direction-links
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import axios from 'axios';
import type { PokemonAPI, Pokemon } from 'src/types/pokemon';

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const pokemons = ref<Pokemon[]>([]);
    const pagina = ref(1);
    const porPagina = 36;

    const pokemonsPaginados = computed(() => {
      const inicio = (pagina.value - 1) * porPagina;
      const fim = inicio + porPagina;
      return pokemons.value.slice(inicio, fim);
    });

    const carregarPokemons = async () => {
      const res = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?limit=2000'
      );
      pokemons.value = res.data.results.map((p: PokemonAPI, index: number) => {
        const id = index + 1;

        return {
          id,
          nome: p.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });
    };

    const verPokemon = (pokemon: Pokemon) => {
      console.log(pokemon);
    };

    onMounted(() => {
      carregarPokemons();
    });

    return {
      pokemons,
      pokemonsPaginados,
      pagina,
      porPagina,
      verPokemon,
    };
  },
});
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.my-card {
  margin-bottom: 1rem;
  display: inline-block;
}

.migalha {
  display: flex;
  gap: 1rem;
  align-items: center;
}

/* @media (max-width: 700px) {
  .container {
    column-count: 3;
  }
  .migalha {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .breadcrumbs {
    font-size: 0.7rem;
  }
}

@media (max-width: 500px) {
  .container {
    column-count: 2;
  }
}

@media (max-width: 300px) {
  .container {
    column-count: 1;
  }
} */
</style>
