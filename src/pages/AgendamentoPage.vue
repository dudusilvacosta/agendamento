<template>
  <div class="q-pa-md">
    <h2>Agendamento</h2>
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
                Valor inicial R$ {{ valorInicial }}
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
            <q-img
              src="https://i.pinimg.com/originals/42/29/59/4229593e8eca1f984760aae49352d07a.jpg"
            >
            </q-img>
          </q-card>
          <q-select
            filled
            v-model="cumprimento"
            :options="coprimentos"
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
            v-model="date"
            :options="datasLivres"
            minimal
            class="q-mb-md"
          />

          <q-input filled v-model="time" mask="time" :rules="['time']">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>

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
            <div>selected</div>

            <q-separator spaced />

            <div class="text-h6">Modelo de penteado</div>
            <div>
              <div>tick</div>
            </div>

            <q-separator spaced />

            <div class="text-h6">Comprimento do penteado</div>
            <div>
              <div>{{ cumprimento }}</div>
            </div>

            <q-separator spaced />

            <div class="text-h6">Data do procedimento</div>
            <div>{{ dataAgendada }}</div>

            <q-separator spaced />

            <div class="text-h6">Hora do procedimento</div>
            <div>{{ time }}</div>

            <q-separator spaced />

            <div class="text-h6">Valor final</div>
            <div>
              <div>R$</div>
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

export default defineComponent({
  name: 'AgendamentoPage',

  components: {},

  watch: {
    data: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },

  setup() {
    // Função para obter a data de hoje no formato YYYY/MM/DD
    const getTodayDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}/${month}/${day}`;
    };

    // Variável reativa date com valor inicial como a data de hoje
    const date = ref(getTodayDate());
    const getCurrentTime = () => {
      const today = new Date();
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    };

    // Função para formatar a data em dd/MM/yyyy
    const formatDate = (dateString: string) => {
      const [year, month, day] = dateString.split('/');
      return `${day}/${month}/${year}`;
    };

    // Função para obter o horário atual no formato HH:MM:SS
    const getCurrentTimeWithSeconds = () => {
      const today = new Date();
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');
      const seconds = String(today.getSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
    };

    // Variáveis reativas com valores iniciais
    const valorInicial = ref(100);
    const time = ref(getCurrentTime());
    const timeWithSeconds = ref(getCurrentTimeWithSeconds());
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
    return {
      datasLivres,
      datasAgendadas,
      valorInicial,
      step: ref(1),
      cumprimento: ref('Chanel'),
      date,
      coprimentos: ['Chanel ', 'Long Bob', 'Busto', 'Cintura', 'Quadril'],
      time,
      timeWithSeconds,
      dataAgendada: ref(formatDate(getTodayDate())),
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
@media screen and (max-width: 600px) {
  .container {
    max-width: 100%;
  }
}
</style>
