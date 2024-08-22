<template>
  <div class="q-pa-md">
    <h2>Notificações</h2>
    <div class="row justify-center">
      <div class="chat">
        <q-chat-message
          name="Agendamento"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['hey, how are you?']"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
          class="q-mb-md"
        />

        <q-chat-message
          name="Agendamento"
          avatar="https://cdn.quasar.dev/img/avatar1.jpg"
          :text="['hey, how are you?']"
          stamp="7 minutes ago"
          sent
          bg-color="amber-7"
        />
      </div>
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
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
}
.chat {
  width: 100%;
  height: calc(100vh - 145px);
  max-width: 600px;
  padding: 1rem;
  background-color: #e3e3e3;
}
</style>
