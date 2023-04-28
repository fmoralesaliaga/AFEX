<template>
  <div class="thumbnail" @mouseover="showDeleteButton = true" @mouseleave="showDeleteButton = false">
    <img draggable="false"  :src="imagen" :alt="titulo" @click="openModalVideo" />
    <div class="duration">{{ formattedDuration }}{{ index }}</div>
    <div class="delete-button" v-if="showDeleteButton" @click="openModalEliminar">&#x2716;</div>
    <Alerta  key="alert" v-if="isOpenModalEliminar"
                        @close="closeModalEliminar" 
                        @confirm="eliminarVideo"
                        :text="deleteMessage"/>
    <ModalVideo  key="video" v-if="showModalVideo" :id="props.id" :titulo="props.titulo" :descripcion="props.descripcion" :link="props.link" @closeVideo="closeModalVideo" />           
                        
  </div>
</template>

<script setup>
  const deleteMessage = "¿Esta seguro que desea eliminar el video?";
  import { defineProps, ref } from 'vue';
  import Alerta from './Alerta.vue';
  import ModalVideo from './ModalVideo.vue';
  import {database, sRef, set} from "../utils/firebaseConfig";
  const props = defineProps({
    index: String,
    id: String,
    titulo: String,
    descripcion: String,
    imagen: String,
    duracion: Number,
    link: String,
  });
  const showDeleteButton = ref(false);
  const showModalVideo = ref(false);
  const isOpenModalEliminar = ref(false);

  function openVideo(link) {
    console.log(link);
  }

  function openModalVideo() {
    showModalVideo.value = true;
  }


  function closeModalVideo() {
    showModalVideo.value = false;
  }

  function openModalEliminar() {
    isOpenModalEliminar.value = true;
  }

  function closeModalEliminar() {
    isOpenModalEliminar.value = false;
  }

  function eliminarVideo() {
    set(sRef(database, "videos/"+props.id), null).then(() => {
          console.log("bien");
        })
        .catch((error) => {
          console.error("hubo un error", error);
        });
    closeModalEliminar();
  }

  function formatDuration(time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - (hours * 3600)) / 60);
    const seconds = time % 60;
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  const formattedDuration = formatDuration(props.duracion);
</script>

<style scoped>
  .thumbnail {
    position: relative;
    cursor: pointer;
    display: inline-block;
  }

  img {
    width: 20vw;
    aspect-ratio: 263 / 150;
    object-fit: cover;
  }

  .duration {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 5px;
    margin: 10px 5px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5%;
  }

  .delete-button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0px 5px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5%;
    margin: 5px 5px;
    opacity: 0.8;
    cursor: pointer;
  }
</style>
