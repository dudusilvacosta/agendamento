<template>
  <div class="container">
    <div class="q-pa-md" style="width: 100vw; max-width: 300px">
      <h2>Entrar</h2>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="name" label="Seu e-mail" hint="obrigatório" />

        <q-input
          filled
          type="password"
          v-model="age"
          label="Sua senha"
          hint="obrigatório"
        />

        <div>
          <q-btn label="Enviar" type="submit" color="primary" />
          <q-btn
            label="Limpar"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'EntrarPage',

  components: {},

  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const age = ref(null);
    const accept = ref(false);
    return {
      name,
      age,
      accept,

      onSubmit() {
        if (!accept.value) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>

<style scoped>
.container {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
