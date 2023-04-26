<template>
    <div class="video-gallery">
      <div v-for="video in videoList" :key="video.videoId" class="video">
        <VideoThumbnail :videoId="video.videoId" :videoTitle="video.videoTitle" :thumbnailUrl="video.thumbnailUrl" :link="video.link" />
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoThumbnail from './VideoThumbnail.vue';

  const props = defineProps({
    videoList: Object
  })

  </script>
  
  <style scoped>
  .video-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .video{
    padding-block:4%;
    flex-basis: 33.333333%;
  }
  </style>