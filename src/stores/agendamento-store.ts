import { defineStore } from 'pinia';

export const useAgendamentoStore = defineStore('agendamento', {
  state: () => ({
    // objeto de estado
    agendamento: {
      tipoPenteado: '',
      modeloPenteado: '',
      valorInicial: 0,
      comprimento: 'Escolher',
      data: '',
      hora: '09:24:10',
      valorFinal: 0,
      status: '',
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
    setStatus(status: string) {
      this.agendamento.status = status;
    },
  },
});
