<template>
    <div class="thumbnail">
      <img :src="thumbnailUrl" :alt="videoTitle" @click="openVideo(link)" />
    </div>
  </template>
  
  <script setup>
  
  const props = defineProps({
    videoId: String,
    videoTitle: String,
    thumbnailUrl: String,
    link: String,
  });
  
  function openVideo(link) {
    window.open(link, '_blank');
  }
  </script>
  
  <style scoped>
  .thumbnail {
    cursor: pointer;

  }

  img{
    width: 263px;
    aspect-ratio: 263 / 150;
    object-fit: cover;
  }
  </style>