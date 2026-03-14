<template>
  <div class="q-pa-md" v-if="pokemon">
    <q-card class="pokemon-card">
      <!-- HEADER -->
      <q-card-section class="row items-center justify-between">
        <div class="text-h5 text-capitalize">
          {{ pokemon.name }}
        </div>

        <div class="text-grey">#{{ pokemon.id }}</div>
      </q-card-section>

      <!-- IMAGE -->
      <q-card-section class="text-center">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          class="pokemon-img"
        />
      </q-card-section>

      <!-- TYPES -->
      <q-card-section>
        <div class="row q-gutter-sm justify-center">
          <q-badge
            v-for="t in pokemon.types"
            :key="t.type.name"
            color="primary"
            class="text-capitalize"
          >
            {{ t.type.name }}
          </q-badge>
        </div>
      </q-card-section>

      <!-- BASIC DATA -->
      <q-separator />

      <q-card-section class="row justify-around">
        <div>
          <div class="text-grey">Altura</div>
          {{ pokemon.height }}
        </div>

        <div>
          <div class="text-grey">Peso</div>
          {{ pokemon.weight }}
        </div>

        <div>
          <div class="text-grey">XP</div>
          {{ pokemon.base_experience }}
        </div>
      </q-card-section>

      <!-- STATS -->
      <q-separator />

      <q-card-section>
        <div v-for="s in pokemon.stats" :key="s.stat.name" class="q-mb-sm">
          <div class="row justify-between text-caption">
            <span class="text-capitalize">
              {{ s.stat.name }}
            </span>
            <span>
              {{ s.base_stat }}
            </span>
          </div>

          <q-linear-progress :value="s.base_stat / 200" color="primary" />
        </div>
      </q-card-section>

      <!-- ABILITIES -->
      <q-separator />

      <q-card-section>
        <div class="text-subtitle2 q-mb-sm">Habilidades</div>

        <q-chip
          v-for="a in pokemon.abilities"
          :key="a.ability.name"
          class="text-capitalize"
        >
          {{ a.ability.name }}
        </q-chip>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import type { PokemonDetail } from 'src/types/pokemon';

export default defineComponent({
  name: 'PokemonPage',

  setup() {
    const route = useRoute();
    const id = Number(route.params.id);

    const pokemon = ref<PokemonDetail | null>(null);

    const carregarPokemon = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

      pokemon.value = res.data;
    };

    onMounted(carregarPokemon);

    return {
      pokemon,
    };
  },
});
</script>

<style>
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
}
.pokemon-card {
  max-width: 400px;
  margin: auto;
}

.pokemon-img {
  width: 200px;
}
</style>
