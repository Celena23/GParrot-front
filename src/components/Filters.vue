<template>
  <div class="card flex justify-content-center">
    <Dropdown v-model="selectedVehicules" :options="sortedMarques" placeholder="choisir une marque" class="w-full md:w-14rem" @change="filter($event)">{{slotProps}}</Dropdown>
    <Dropdown v-model="selectedPrix" :options="sortedPrix" option-label="label" option-value="value" placeholder="prix" class="w-full md:w-14rem" @change="filter($event)">{{slotProps}}</Dropdown>

  </div>
</template>

<script setup lang="ts">
import { Vehicule } from "@/entities/Vehicule";
import {ref, watch} from "vue";
import axios, {AxiosError} from "axios";


const vehicules = ref<Vehicule[] | null>(null);
const marques = ref<string[]>([]);
const prix = ref<string[]>([]);
const vehiculesFiltres = ref<Vehicule[]>([]);
const sortedMarques = ref<string[]>([]);
const selectedPrix = ref()
const selectedVehicules=ref()
const sortedPrix = ref<{ label:string, value:string }[]>([{label:"Tous les prix", value:"Tous les prix"},
  {label:"moins de 20000 €", value:"0-19999"},
  {label:"entre 20000 € et 40000 €", value:"20000-39999"},
  {label:"plus de 40000 €", value:"40000-999999999999"},]);

const error = ref()
axios
    .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
    .then((response: any) =>{
      const responseData = response.data._embedded?.vehicule;
      vehicules.value = response.data._embedded.vehicule ;
      if (Array.isArray(responseData)) {
        vehicules.value = responseData;
        marques.value = responseData.map((vehicule) => vehicule.marque);
        prix.value = responseData.map((vehicule) => vehicule.prix);
        marques.value = marques.value.filter((marque, index) => marques.value.indexOf(marque) === index);
        vehiculesFiltres.value = vehicules.value;
      } else {
        vehicules.value = [];
        marques.value = [];
        prix.value = [];
        vehiculesFiltres.value = vehicules.value;
      }
      sortedMarques.value = marques.value.slice().sort((a,b)=>a.localeCompare(b)).map((marque) => marque.toUpperCase());
      sortedMarques.value.unshift("Toutes les marques")
    })
    .catch((err: AxiosError) => error.value = err.message)


const defineEmit = defineEmits<{(e:'filter', fields:any)}> ()
const filter = (event:any) => {
  defineEmit('filter', {marque:selectedVehicules.value, prix:selectedPrix.value})
}

</script>

<style scoped>

</style>