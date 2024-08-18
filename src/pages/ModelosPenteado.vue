<template>
  <div class="q-pa-md">
    <h2>Modelos de Penteado</h2>
    <div class="container">
      <div v-for="(modelo, index) in modelosPenteado" :key="index">
        <q-card class="my-card">
          <q-img :src="modelo.img">
            <div class="absolute-bottom text-h6">
              A partir de R${{ modelo.preco }}
            </div>
          </q-img>
          <q-card-section>
            <q-btn color="primary" label="Agendar" to="/agendamento" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  components: {},

  setup() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...',
      model: ref(null),
      options: [
        'Box Braids',
        'Boxeadora',
        'Crochet Braids',
        'Dreads',
        'Entrelance',
      ],
      modelosPenteado: [
        {
          img: 'https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=300',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/6975934/pexels-photo-6975934.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/8817520/pexels-photo-8817520.jpeg?auto=compress&cs=tinysrgb&w=300',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/9836622/pexels-photo-9836622.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/6599498/pexels-photo-6599498.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/5881801/pexels-photo-5881801.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/5541444/pexels-photo-5541444.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/7577048/pexels-photo-7577048.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.pexels.com/photos/8374338/pexels-photo-8374338.jpeg?auto=compress&cs=tinysrgb&w=600',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.unsplash.com/photo-1583284791098-29f95de7190b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          preco: 0,
          link: '/agendamento',
        },
        {
          img: 'https://images.unsplash.com/photo-1616166183781-0fdd2ef83374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJyYWlkfGVufDB8fDB8fHww',
          preco: 0,
          link: '/agendamento',
        },
      ],
    };
  },
});
</script>

<style scoped>
h2 {
  margin: 0;
  font-size: 2rem;
}

.container {
  column-count: 4;
}

.my-card {
  width: 100%;
  margin-bottom: 1rem;
  display: inline-block;
}

@media (max-width: 700px) {
  .container {
    column-count: 3;
  }
}

@media (max-width: 500px) {
  .container {
    column-count: 2;
  }
}

@media (max-width: 300px) {
  .container {
    column-count: 1;
  }
}
</style>
