<template>
  <div class="q-pa-md">
    <div class="migalha">
      <h2>Agendamento</h2>
      <q-breadcrumbs class="breadcrumbs">
        <q-breadcrumbs-el label="Tipos de Penteados" />
        <q-breadcrumbs-el label="Modelos de Penteado" />
        <q-breadcrumbs-el label="Agendamento" />
      </q-breadcrumbs>
    </div>
    <div class="container">
      <q-stepper v-model="step" vertical color="primary" animated>
        <q-step
          :name="1"
          title="Modelo do penteado"
          icon="done"
          :done="step > 1"
        >
          <q-card>
            <q-img
              src="https://img.freepik.com/fotos-premium/foto-de-box-braids_889056-2231.jpg"
            >
              <div class="absolute-bottom text-h6">
                Modelo {{ agendamento.modeloPenteado }}
              </div>
            </q-img>
          </q-card>

          <q-stepper-navigation>
            <q-btn @click="step = 2" color="primary" label="Continue" />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="2"
          title="Escolher o comprimento do penteado"
          caption=""
          icon="straighten"
          :done="step > 2"
        >
          <q-card>
            <q-img :src="img"> </q-img>
          </q-card>
          <q-select
            filled
            v-model="agendamento.comprimento"
            :options="comprimentos"
            label="Comprimento"
            class="q-mt-md"
          />

          <q-stepper-navigation>
            <q-btn @click="step = 3" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 1"
              color="primary"
              label="Voltar"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="3"
          title="Escolher data e a hora"
          caption=""
          icon="calendar_month"
          :done="step > 3"
        >
          <q-date
            v-model="agendamento.data"
            :options="datasLivres"
            minimal
            class="q-mb-md"
          />

          <q-select
            filled
            v-model="agendamento.hora"
            :options="horasLivres"
            label="Filled"
          />

          <q-stepper-navigation>
            <q-btn @click="step = 4" color="primary" label="Continue" />
            <q-btn
              flat
              @click="step = 2"
              color="primary"
              label="Voltar"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>

        <q-step
          :name="4"
          title="Finalizar agendamento"
          caption=""
          icon="done_all"
        >
          <div class="col-12 col-sm-6 q-gutter-sm">
            <div class="text-h6">Tipo de penteado</div>
            <div>{{ agendamento.tipoPenteado }}</div>

            <q-separator spaced />

            <div class="text-h6">Modelo de penteado</div>
            <div>
              <div>{{ agendamento.modeloPenteado }}</div>
            </div>

            <q-separator spaced />

            <div class="text-h6">Comprimento do penteado</div>
            <div>
              <div>{{ agendamento.comprimento }}</div>
            </div>

            <q-separator spaced />

            <div class="text-h6">Data do procedimento</div>
            <div>{{ formataData(agendamento.data) }}</div>

            <q-separator spaced />

            <div class="text-h6">Hora do procedimento</div>
            <div>{{ agendamento.hora }}</div>

            <q-separator spaced />

            <div class="text-h6">Valor</div>
            <div>
              <div>R$ {{ agendamento.valorFinal }}</div>
            </div>
          </div>

          <q-stepper-navigation>
            <q-btn color="primary" label="Agendar agora" />
            <q-btn
              flat
              @click="step = 3"
              color="primary"
              label="Voltar"
              class="q-ml-sm"
            />
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAgendamentoStore } from 'src/stores/agendamento-store';
import img from '../assets/comprimento.png';

export default defineComponent({
  name: 'AgendamentoPage',

  components: {},

  watch: {},

  setup() {
    const formataData = (data: string) => {
      const [ano, mes, dia] = data.split('/');
      return `${dia}/${mes}/${ano}`;
    };

    // Variáveis reativas com valores iniciais
    const agendamentoStore = useAgendamentoStore();
    const agendamento = agendamentoStore.agendamento;
    const hora = agendamentoStore.agendamento.hora;
    const datasLivres = ref([
      '2024/08/01',
      '2024/08/02', // quinta e sexta
      '2024/08/05',
      '2024/08/06',
      '2024/08/07',
      '2024/08/08',
      '2024/08/09', // segunda a sexta
      '2024/08/12',
      '2024/08/13',
      '2024/08/14',
      '2024/08/15',
      '2024/08/16', // segunda a sexta
      '2024/08/19',
      '2024/08/20',
      '2024/08/21',
      '2024/08/22',
      '2024/08/23', // segunda a sexta
      '2024/08/26',
      '2024/08/27',
      '2024/08/28',
      '2024/08/29',
      '2024/08/30', // segunda a sexta
    ]);
    const datasAgendadas = ref(['2021/10/01', '2021/10/02', '2021/10/03']);
    const horasLivres = ref([
      '08:00',
      '09:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ]);
    return {
      step: ref(1),
      img,
      datasLivres,
      datasAgendadas,
      horasLivres,
      horasAgendadas: ref(['08:00', '09:00', '10:00']),
      agendamento,
      comprimentos: ['Chanel ', 'Long Bob', 'Busto', 'Cintura', 'Quadril'],
      hora,
      formataData,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 400;
}
.migalha {
  display: flex;
  gap: 1rem;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
  .migalha {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
  }
  .breadcrumbs {
    font-size: 0.7rem;
  }
  .text-h6 {
    font-size: 1rem;
  }
}
</style>
