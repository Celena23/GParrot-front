<template>
  <div class="card flex justify-content-center">
    <Dropdown v-model="vehiculesFiltres" :options="marques" placeholder="choisir une marque" class="w-full md:w-14rem">{{slotProps}}</Dropdown>
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
      vehicules.value = response.data._embedded.vehicule ; console.log(vehicules.value);
      if (Array.isArray(responseData)) {
        vehicules.value = responseData;
        marques.value = responseData.map((vehicule) => vehicule.marque);
        vehiculesFiltres.value = vehicules.value;
      } else {
        vehicules.value = [];
        marques.value = [];
        vehiculesFiltres.value = [];
      }
    })

    .catch((err: AxiosError) => error.value = err.message)


</script>

<style scoped>

</style>