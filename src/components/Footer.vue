<template>
  <div id="footer" class="w-full">
  <div class="bg-primary px-4 py-8 md:px-6 lg:px-8 w-full">
    <div class="bg-primary">
      <div class="grid flex">
        <div class="col-12 md:col-6">
          <div class="text-white text-lg mb-4 flex flex-wrap" style="max-width: 290px">Garage Vincent PARROT</div>
          <div class="text-white text-lg mb-4 flex flex-wrap" style="max-width: 290px">13 rue de la clef à molette</div>
          <div class="text-white text-lg mb-4 flex flex-wrap" style="max-width: 290px">31000 TOULOUSE</div>
          <div class="text-white mb-3"><i class="pi pi-phone surface-800 border-round p-1 mr-2"></i>03 20 00 00 00</div>
<!--          <div class="text-white mb-3"><i class="pi pi-inbox surface-800 border-round p-1 mr-2"></i><a :href="'mailto:san@antonio.net?subject=' +id Voiture + '&cc=' + cc + '&bcc=avocat@antonio.net&body=Bonjour" >contact@vparrot.com</a></div>-->
        </div>
        <div class="col-12 md:col-6 text-gray-200 flex flex-column justify-content-start align-items-end">
          <div class="text-white text-lg font-bold line-height-3 mb-3">NOS HORAIRES D'OUVERTURES</div>
          <div class="text-white text-lg line-height-3 mb-3">Du lundi au vendredi :</div>
          <a class="line-height-3 block  mb-2">De {{ horaire?.morningWeekDayStart }} à {{ horaire?.morningWeekDayEnd }} </a>
          <a class="line-height-3  block  mb-2">De {{ horaire?.afternoonWeekDayStart }} à {{ horaire?.afternoonWeekDayEnd }} </a>
          <div class="text-white text-lg line-height-3 mb-3">Le samedi :</div>
          <a class="line-height-3 block  mb-2">De {{ horaire?.morningSaturdayStart }} à {{ horaire?.morningSaturdayEnd }} </a>
          <div class="text-white mt-2 text-xs font-light line-height-3 mb-3">Nous apportons autant de précision à nos horaires qu'à vos véhicules ! </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { Horaires } from "@/entities/Horaires";
import axios, {AxiosError} from "axios";

const horaire = ref<Horaires | null>(null);
const error = ref()
axios
    .get("http://localhost:8080/horaires/1", {headers: {"Content-Type": "application/json"}})
    .then((response: any) => {
      horaire.value = response.data;
    })
    .catch((err: AxiosError) => error.value = err.message)
</script>

<style scoped>
#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
}
</style>