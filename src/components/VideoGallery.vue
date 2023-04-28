<template>
    <div class="video-gallery" v-if="videoList">
      <div v-for="video in videoList" :key="video.videoId" class="video">
        <VideoThumbnail :id="video.id" :index="video.index" :titulo="video.titulo" :descripcion="video.descripcion" :imagen="video.imagen" :duracion="video.duracion" :link="video.link"/>
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoThumbnail from './VideoThumbnail.vue';
  import {ref, onMounted} from "vue";
  import {database, sRef, onValue} from "../utils/firebaseConfig";
  const videoList = ref({})

  onMounted(() => {
    const videosRef = sRef(database, 'videos');
    onValue(videosRef, (snapshot) => {
      const data = snapshot.val();
      videoList.value = data;
      console.log(videoList.value)
    });
  })
  
  </script>
  
  <style scoped>
  .video-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-width: 80vw;
    width: 90vw;
  }

  .video{
    padding-block:4%;
    flex-basis: 33.333333%;
  }
  </style>