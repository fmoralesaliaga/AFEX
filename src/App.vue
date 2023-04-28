<template>
  <p>Añadir nuevo video</p>
  <URLInput class="URLInput"/>
  <VideoGallery class="gallery"/>
</template>


<script setup>
  import URLInput from './components/URLInput.vue'
  import VideoGallery from './components/VideoGallery.vue';
</script>

<style scoped>
  p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 28.329px;
    line-height: 38px;
    /* identical to box height, or 133% */

    display: flex;
    align-items: center;

    color: #020202;
  }
  .URLInput{
    width: 100%;
  }

  .gallery{
    margin-top: 100px;
    max-width: 929px;
  }

  app{
    width: 1000px
  }
</style>
