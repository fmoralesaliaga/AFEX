<template>
    <div @click="$emit('closeVideo')" class="modal" >
      <div class="modal-content" @click.stop>
      <span class="close" @click="$emit('close')">&times;</span>
      <div class="modal-text">{{ text }}</div>
      <div class="modal-buttons">
        <button class="button-secondary" @click="$emit('close')">Cancelar</button>
        <button class="button-primary" @click="$emit('confirm')">Eliminar</button>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    text: String,
  },
};
</script>

<style>
.modal {
  display: block; 
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;
  overflow: auto; 
  background-color: rgba(0,0,0,0.4); 
}

.modal-content {
  background-color: #FBFBFB;
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.07);
  margin: 15% auto; 
  padding: 20px;
  border: 1px solid #888;
  width: 30%; 
  border-radius: 15px;
}

.modal-text{
  padding: 30px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 38px;
  /* identical to box height, or 157% */

  text-align: center;

  color: #3C3E41;
  }

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.button-primary{
  background-color:#136AE4;
  color: #FBFBFB
;
}

.button-primary:hover{
  opacity: 0.8;
}
</style>
