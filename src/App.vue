<script setup>
import URLInput from './components/URLInput.vue'
import VideoGallery from './components/VideoGallery.vue';

const myVideoList = [
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  {
    videoId: 'Sunzh8kXuWU',
    videoTitle: 'Video 1',
    thumbnailUrl: 'http://i3.ytimg.com/vi/Sunzh8kXuWU/hqdefault.jpg',
    link: 'https://multiverse.cl',
  },
  // Add more videos here
];
</script>

<template>
  <URLInput class="URLInput"/>
  <VideoGallery :videoList="myVideoList" class="gallery"/>
</template>

<style scoped>
  .URLInput{
    width: 100%;
  }
  p{
    position: absolute;
    width: 242px;
    height: 38px;
    left: 356px;
    top: 104px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
    padding-bottom: 16px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;

    color: #020202;
  }

  .gallery{
    margin-top: 100px;
    max-width: 929px;
  }

  app{
    width: 1000px
  }
</style>
