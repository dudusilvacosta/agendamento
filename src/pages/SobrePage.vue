<template>
  <div class="q-ma-md">
    <div class="container">
      <h2>Sobre</h2>
      <p v-for="n in 10" :key="n" class="q-py-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SobrePage',

  components: {},

  setup() {
    return {};
  },
});
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
