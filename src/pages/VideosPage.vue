<template>
  <main class="principal">
    <!-- Vídeo principal -->
    <section>
      <iframe
        class="videop"
        :src="'https://www.youtube.com/embed/' + videoId"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      >
      </iframe>
    </section>

    <!-- Navegação -->
    <nav>
      <ul>
        <li v-for="video in videos" :key="video.id">
          <img
            :src="'https://img.youtube.com/vi/' + video.id + '/hqdefault.jpg'"
            alt="Miniatura do vídeo"
            @click="setVideo(video.id)"
            class="thumbnail"
          />
        </li>
      </ul>
    </nav>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Video {
  id: string;
}

export default defineComponent({
  name: 'IndexPage',

  setup() {
    const videoId = ref<string>('XN14_Vt-IKk');

    const videos = ref<Video[]>([
      { id: 'XN14_Vt-IKk' },
      { id: 'xdD6A_QRYcU' },
      { id: 'cgj8wm6uZOA' },
      { id: 'Nn410kN2cCU' },
      { id: 'Vbrr_G4uzO4' },
      { id: 'PdfjX4I6wFs' },
    ]);

    const setVideo = (id: string) => {
      videoId.value = id;
    };

    return {
      videoId,
      videos,
      setVideo,
    };
  },
});
</script>
<style>
.principal {
  width: 100%;
  max-width: 790px;
  margin: 1rem auto;
  display: flex;
  gap: 1rem;
}
.videop {
  width: 560px;
  height: 315px;
}
.thumbnail {
  cursor: pointer;
  width: 100%;
  height: auto;
}
.rodape {
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: #e3e3e3;
  background-color: #333;
}
ul {
  list-style: none;
}
@media screen and (max-width: 815px) {
  .principal {
    flex-direction: column;
    justify-content: space-between;
  }
  .videop {
    width: 100vw;
    height: auto;
    padding: 0 1rem;
  }
  .thumbnail {
    width: 50%;
  }
}
</style>
