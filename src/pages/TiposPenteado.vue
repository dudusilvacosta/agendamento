<template>
  <div class="q-pa-md">
    <h2>Tipos de Penteados</h2>
    <div v-for="(tipo, index) in tiposPenteados" :key="index" class="tipo">
      <img :src="tipo.img" class="img" />
      <p>{{ tipo.nome }}</p>
      <q-btn
        label="Ver modelos"
        color="primary"
        to="/modelos-penteado"
        class="btn"
      />
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
      tiposPenteados: [
        {
          img: 'https://plus.unsplash.com/premium_photo-1664875849368-596b1c113976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxicmFpZHN8ZW58MHx8MHx8fDA%3D',
          nome: 'Box braids',
          link: '/modelos',
        },
        {
          img: 'https://img.cmswebsg.com.br/atanews.com.br/image?src=https://atanews.com.br/images/noticias/25985/21012020152400_FOTO.jpg&w=1200&h=630&output=webp',
          nome: 'Boxeadora',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Dreads',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/3435323/pexels-photo-3435323.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Crochet braids',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Entrelance',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1632765937900-a3bbbfa58d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Fulani braids',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1548772673-6477e2193bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Twist',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1583284791098-29f95de7190b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Nagô',
          link: '/modelos',
        },
      ],
    };
  },
});
</script>

<style>
h2 {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
}
.tipo {
  width: 92vw;
  max-width: 500px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
p {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
}
.btn {
  font-size: 0.75rem;
}
</style>
