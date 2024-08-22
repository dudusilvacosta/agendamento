<template>
  <div class="q-pa-md">
    <h2>Tipos de Penteados</h2>
    <div style="width: 100%; max-width: 600px; margin: 0 auto">
      <div v-for="(tipo, index) in tiposPenteados" :key="index" class="tipo">
        <img :src="tipo.img" class="img" />
        <q-list bordered class="rounded-borders list">
          <q-expansion-item expand-separator :label="tipo.nome" caption="">
            <q-card>
              <q-card-section>
                <p>{{ tipo.desc }}</p>
                <q-btn
                  label="Ver modelos"
                  color="primary"
                  to="/modelos-penteado"
                  class="btn"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
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
      tiposPenteados: [
        {
          img: 'https://plus.unsplash.com/premium_photo-1664875849368-596b1c113976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHxicmFpZHN8ZW58MHx8MHx8fDA%3D',
          nome: 'Box braids',
          desc: 'As box braids são tranças sintéticas ou naturais. Elas são feitas trançando o cabelo em mechas finas e longas, proporcionando um visual elegante e duradouro.',
          link: '/modelos',
        },
        {
          img: 'https://img.cmswebsg.com.br/atanews.com.br/image?src=https://atanews.com.br/images/noticias/25985/21012020152400_FOTO.jpg&w=1200&h=630&output=webp',
          nome: 'Boxeadora',
          desc: 'A trança boxeadora, também conhecida como boxer braid, é um penteado prático e estiloso, composto por duas tranças embutidas, uma de cada lado da cabeça. Inspirada nas lutadoras de boxe, essa trança mantém os fios firmemente presos, evitando que atrapalhem durante atividades físicas.',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/2698935/pexels-photo-2698935.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Dreads',
          desc: 'Os dreads, ou dreadlocks, são um penteado icônico e cheio de atitude, conhecido por sua aparência única e manutenção relativamente fácil. Formados por mechas de cabelo entrelaçadas, os dreads podem ser longos, curtos ou médios. Além disso, os dreads oferecem uma variedade de opções de estilo, desde tranças até coques.',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/3435323/pexels-photo-3435323.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Crochet braids',
          desc: 'As crochet braids, ou tranças de crochê, são uma técnica versátil e estilosa que envolve a aplicação de extensões de cabelo sintético ou natural usando uma agulha de crochê. Esse método é ideal para quem deseja mudar o visual sem comprometer os fios naturais, oferecendo proteção e a possibilidade de experimentar diferentes comprimentos, cores e texturas.',
          link: '/modelos',
        },
        {
          img: 'https://images.pexels.com/photos/1405982/pexels-photo-1405982.jpeg?auto=compress&cs=tinysrgb&w=600',
          nome: 'Entrelance',
          desc: 'O penteado Entrelace é uma técnica de alongamento onde o cabelo natural é trançado em estilo nagô ou raiz, e extensões são costuradas nas tranças. Ideal para quem busca volume e comprimento, permite criar diversos estilos e visuais. A manutenção é simples, com durabilidade de até dois meses.',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1632765937900-a3bbbfa58d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Fulani braids',
          desc: 'As Fulani braids, também conhecidas como tranças Fulani ou tranças tribais, são um estilo tradicional africano originário do povo Fulani, um grupo nômade encontrado principalmente na África Ocidental. Este penteado é caracterizado por tranças finas e intrincadas, frequentemente adornadas com contas, conchas e outros acessórios decorativos.',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1548772673-6477e2193bbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Twist',
          desc: 'O penteado Twist é uma técnica popular de estilização de cabelo afro, onde duas mechas de cabelo são torcidas juntas para criar um efeito de espiral. Este estilo é versátil e pode ser usado tanto em cabelos naturais quanto em cabelos com extensões. Os Twists podem variar em tamanho, desde pequenos e apertados até grandes e soltos, permitindo uma ampla gama de looks.',
          link: '/modelos',
        },
        {
          img: 'https://images.unsplash.com/photo-1583284791098-29f95de7190b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJyYWlkc3xlbnwwfHwwfHx8MA%3D%3D',
          nome: 'Nagô',
          desc: 'O penteado nagô, também conhecido como trança nagô ou trança raiz, é uma técnica tradicional africana onde o cabelo é trançado bem rente ao couro cabeludo em padrões geométricos ou linhas retas. Este estilo é não apenas esteticamente atraente, mas também funcional, pois ajuda a proteger o cabelo natural e facilita a manutenção.',
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
  font-weight: 400;
}
.tipo {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
.list {
  width: 80%;
}
.btn {
  font-size: 0.75rem;
}
@media screen and (max-width: 600px) {
  .list {
    width: 65%;
  }
}
</style>
