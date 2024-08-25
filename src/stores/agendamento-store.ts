import { defineStore } from 'pinia';

export const useAgendamentoStore = defineStore('agendamento', {
  state: () => ({
    // objeto de estado
    agendamento: {
      tipoPenteado: '',
      modeloPenteado: '',
      valorInicial: 0,
      comprimento: 'Escolher',
      data: '0000/00/00',
      hora: '00:00',
      valorFinal: 0,
      status: false,
    },
  }),
  getters: {
    // retorna o estado
    agendamentoStore: (state) => state.agendamento,
  },
  actions: {
    // altera o estado
    setTipoPenteado(tipoPenteado: string) {
      this.agendamento.tipoPenteado = tipoPenteado;
    },
    setModeloPenteado(modeloPenteado: string) {
      this.agendamento.modeloPenteado = modeloPenteado;
    },
    setValorInicial(valorInicial: number) {
      this.agendamento.valorInicial = valorInicial;
    },
    setComprimento(comprimento: string) {
      this.agendamento.comprimento = comprimento;
    },
    setData(data: string) {
      this.agendamento.data = data;
    },
    setHora(hora: string) {
      this.agendamento.hora = hora;
    },
    setValorFinal(valorFinal: number) {
      this.agendamento.valorFinal = valorFinal;
    },
    setStatus(status: boolean) {
      this.agendamento.status = status;
    },
    resetAgendamento() {
      this.agendamento = {
        tipoPenteado: '',
        modeloPenteado: '',
        valorInicial: 0,
        comprimento: 'Escolher',
        data: '0000/00/00',
        hora: '00:00',
        valorFinal: 0,
        status: false,
      };
    },
  },
});
