<template>
    <div @click="$emit('closeVideo')" class="modal-video">
      <div class="contenido-modal-video" @click.stop>
        <span class="cerrar-modal-video" @click="$emit('closeVideo')">&times;</span>
        <div class="contenedor-iframe">
          <iframe :src="'https://www.youtube.com/embed/'+props.id" frameborder="0"></iframe>
        </div>
        <div class="contenedor-texto">
          <h2 class="titulo-modal-video">{{props.titulo}}</h2>
          <p class="descripcion-modal-video">{{ props.descripcion }}</p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  const props = defineProps({
    id: String,
    titulo: String,
    descripcion: String,
    link: String,
  });
  </script>
  <style>
  .modal-video {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .contenido-modal-video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    width: 80%;
    height: 50%;
    box-sizing: border-box;
    padding: 20px;
    background-color: #fbfbfb;
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
    border: 1px solid #888;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
  }
  
  .titulo-modal-video {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #3c3e41;
  }
  
  .descripcion-modal-video {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: #888;
  }
  
  .contenedor-iframe {
    position: relative;
    aspect-ratio: 2/1;
    max-width: 60%;
  }
  
  .contenedor-iframe iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  
  .contenedor-texto {
    display: flex;
    overflow-y: auto;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    margin: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
    color: #3c3e41;
  }
  
  .cerrar-modal-video {
    color: #aaa;
    font-size: 28px;
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  
  .cerrar-modal-video:hover,
  .cerrar-modal-video:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>