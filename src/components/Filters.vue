<template>
  <div class="card flex justify-content-center">
    <Dropdown v-model="vehiculesFiltres" :options="sortedMarques" placeholder="choisir une marque" class="w-full md:w-14rem">{{slotProps}}</Dropdown>
  </div>
</template>

<script setup lang="ts">
import { Vehicule } from "@/entities/Vehicule";
import {ref, watch} from "vue";
import axios, {AxiosError} from "axios";
const selectedVehicules = ref();

const vehicules = ref<Vehicule[] | null>(null);
const marques = ref<string[]>([]);
const vehiculesFiltres = ref();

const error = ref()
axios
    .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
    .then((response: any) =>{
      const responseData = response.data._embedded?.vehicule;
      vehicules.value = response.data._embedded.vehicule ;
      if (Array.isArray(responseData)) {
        vehicules.value = responseData;
        marques.value = responseData.map((vehicule) => vehicule.marque);
        marques.value = marques.value.filter((marque, index) => marques.value.indexOf(marque) === index);
        vehiculesFiltres.value = vehicules.value;
      } else {
        vehicules.value = [];
        marques.value = [];
        vehiculesFiltres.value = vehicules.value;
      }
    })

    .catch((err: AxiosError) => error.value = err.message)
const sortedMarques = ref<string[]>([]);
watch(marques, () => {
  sortedMarques.value = marques.value.slice().sort().map((marque) => marque.toUpperCase());
});

</script>

<style scoped>

</style>