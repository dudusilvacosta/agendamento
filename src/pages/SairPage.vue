<template>
  <div class="sair">
    <q-circular-progress
      indeterminate
      rounded
      size="50px"
      color="primary"
      class="q-ma-md"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SairPage',

  components: {},

  setup() {
    return {};
  },
});
</script>

<style>
.sair {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
