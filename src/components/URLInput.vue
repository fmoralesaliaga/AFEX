<template>
  <div class="input-button-container">
    <input type="text" v-model="inputValue" class="input-field" placeholder="Ingrese su texto aquí">
    <button @click="saveInput" class="save-button">Añadir</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')

function saveInput() {
  // Hacer algo con el valor de entrada, como enviarlo a un servidor
  console.log('Valor de entrada guardado: ' + inputValue.value)
}
</script>

<style>
.input-button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
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
