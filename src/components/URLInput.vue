<template>
  <div class="input-button-container">
    <input type="text" v-model="inputValue" class="input-field" placeholder="Ingrese su texto aquí">
    <button @click="guardarInput" class="save-button">Añadir</button>
  </div>
</template>

<script setup>
import {ref} from "vue";
import {database, sRef, set} from "../utils/firebaseConfig";
import { convertirDuracion, obtenerIdVideo, obtenerDatosVideoYoutube } from "../utils/youtube";
const inputValue = ref('')
    
function guardarInput() {
  // Hacer algo con el valor de entrada, como enviarlo a un servidor
  const id = obtenerIdVideo(inputValue.value);
  const key = "AIzaSyC3qRz2uGZUB7O6RSY4_1gk_EIvGxkjDiw"
  

  if(id){
    obtenerDatosVideoYoutube(id, key).then(data => {
        const videoInfo = {
          id: id,
          imagen: data.snippet.thumbnails.medium.url,
          titulo: data.snippet.title,
          descripcion: data.snippet.description,
          duracion: convertirDuracion(data.contentDetails.duration),
          link: inputValue.value,
        }
        console.log(id)
        set(sRef(database, "videos/"+id), {
          id: id,
          titulo: data.snippet.title,
          descripcion: data.snippet.description,
          imagen: data.snippet.thumbnails.medium.url,
          duracion: convertirDuracion(data.contentDetails.duration),
          link: inputValue.value,
        }).then(() => {
          console.log("bien");
        })
        .catch((error) => {
          console.error("hubo un error", error);
        });
    })
    .catch(error => {
      console.error("hubo un error", error);
    });
  }else{
    console.log(false);
  }
}
</script>

<style>
.input-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70vw;
  min-width: 70vw;
  margin: 0 auto;
}

.input-field {
  box-sizing: border-box;
  width: 75%;
  flex-shrink: 0;
  height: 57px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px 0px 0px 5px;
  padding: 23px;
}

.save-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 20px;
  gap: 5px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  background: #136AE4;
  color: #FBFBFB;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 1px 4px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14);
  border-radius: 0 5px 5px 0;
  height: 57px;
  margin: 0;
  flex-grow: 1;
}
</style>
