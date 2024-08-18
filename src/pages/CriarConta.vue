<template>
  <div class="q-pa-md container">
    <div style="width: 100vw; max-width: 500px">
      <h2>Criar Conta</h2>
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="informar E-mail"
          hint="obrigatório"
        />

        <q-input
          filled
          v-model="name"
          label="Informar Senha"
          hint="obrigatório"
        />

        <q-input
          filled
          type="password"
          v-model="age"
          label="Repetir senha"
          hint="obrigatório"
        />

        <q-scroll-area class="scroll">
          <div v-for="n in 100" :key="n" class="q-py-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-scroll-area>

        <q-toggle v-model="accept" label="Eu aceito a licença e os termos" />

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
  name: 'CriarContaPage',

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
        if (accept.value !== true) {
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

<style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.scroll {
  height: calc(100vh - 525px);
}
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
</style>
