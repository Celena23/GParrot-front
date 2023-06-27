<template>

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid mb-7">
      <div class="col-12 lg:col-6">
        <div class="flex">
          <div class="flex flex-column w-2 justify-content-between">
            <img v-for="(image, i) of images2" :key="image" :src="'images/blocks/ecommerce/productoverview/' + image" class="w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150"
                 :class="{'border-primary': selectedImageIndex2 === i}" @click="selectedImageIndex2 = i"/>
          </div>
          <div class="pl-3 w-10">
            <img src="src/assets/bmw.jpg" class="w-full" />
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-6 py-3 lg:pl-6">
        <div class="flex align-items-center text-3xl font-medium text-900 mb-4">marque modele</div>
        <div class="flex align-items-center text-xl font-medium text-900 mb-4">kilometre</div>
        <div class="flex align-items-center text-xl font-medium text-900 mb-4">carburant</div>
        <div class="flex align-items-center justify-content-between mb-5">
          <span class="text-900 font-medium text-2xl block">Prix €</span>
        </div>
      </div>
    </div>

    <TabView>
      <TabPanel header="Details">
        <div class="text-900 font-medium text-3xl mb-4 mt-2">Notre avis</div>
        <p class="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Description</p>


      </TabPanel>
      <TabPanel header="Reviews">
        <div class="text-900 font-medium text-3xl mb-4 mt-2">Customer Reviews</div>

        <div class="grid">
          <div class="col-12 lg:col-4">
            <span class="text-900 block font-medium mb-3">Highlights</span>
            <ul class="py-0 pl-3 m-0 text-700 mb-3">
              <li class="mb-2">Vulputate sapien nec.</li>
              <li class="mb-2">Purus gravida quis blandit.</li>
              <li class="mb-2">Nisi quis eleifend quam adipiscing.</li>
              <li>Imperdiet proin fermentum.</li>
            </ul>
          </div>
          <div class="col-12 lg:col-4">
            <span class="text-900 block font-medium mb-3">Size and Fit</span>
            <ul class="list-none p-0 m-0 text-700 mb-4">
              <li class="mb-3"><span class="font-medium">Leo vel:</span> Egestas congue.</li>
              <li class="mb-3"><span class="font-medium">Sociis natoque:</span> Parturient montes nascetur.</li>
              <li><span class="font-medium">Suspendisse in:</span> Purus sit amet volutpat.</li>
            </ul>
          </div>
          <div class="col-12 lg:col-4">
            <span class="text-900 block font-medium mb-3">Material & Care</span>
            <ul class="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
              <li class="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                <i class="pi pi-sun mr-2"></i>
                <span>Not dryer safe</span>
              </li>
              <li class="flex align-items-center white-space-nowrap w-10rem block mb-3">
                <i class="pi pi-times-circle mr-2"></i>
                <span>No chemical wash</span>
              </li>
              <li class="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                <i class="pi pi-sliders-h mr-2"></i>
                <span>Iron medium heat</span>
              </li>
              <li class="flex align-items-center white-space-nowrap w-10rem block mb-3">
                <i class="pi pi-minus-circle mr-2"></i>
                <span>Dry flat</span>
              </li>
            </ul>
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>

<script setup lang="ts">

import { Vehicule } from "@/entities/Vehicule";
import {ref} from "vue";
// import {FilterMatchMode} from "primevue/api";
import axios, {AxiosError} from "axios";
import Filters from "@/components/Filters.vue";

const selectedVehicules = ref();

const vehicules = ref<Vehicule[] | null>(null);

const vehiculesFiltres = ref<Vehicule[]>([]);


const layout = ref('grid');
const error = ref()
axios
    .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
    .then((response: any) =>{

      vehicules.value = response.data._embedded.vehicule ; console.log(vehicules.value)})
    .catch((err: AxiosError) => error.value = err.message)

</script>

<style scoped>

</style>