<template>

  <div class="surface-section px-4 py-2 md:px-6 lg:px-8">
    <div class="grid mb-7">
      <div class="col-12 lg:col-6">
        <div class="flex">
          <div class="pl-3 w-10">
<!--            <div v-if="vehicule.photos && vehicule.photos.length > 0">-->
<!--            <Carousel :value="vehicule.photos" :responsiveOptions="responsiveOptions" :numVisible="3" containerStyle="max-width: 640px">-->
<!--              <template #item={item}>-->
<!--                <img :src="item.photo" style="width: 100%" />-->
<!--              </template>-->
<!--              <template #thumbnail={item}>-->
<!--                <img :src="item.photo" />-->
<!--              </template>-->
<!--            </Carousel>-->
<!--            </div>-->


            <div v-if="vehicule.photos && vehicule.photos.length > 0">
              <img v-for="(photo, index) in vehicule.photos" :key="index" :src="photo.photo" class="w-full overflow-hidden" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 lg:col-6 py-3 lg:pl-6" v-if="vehicule">
        <div class="flex align-items-center text-6xl font-medium text-900 mb-4">{{ vehicule.marque }} {{ vehicule.modele }}</div>
                        <div class="flex align-items-center justify-content-between mb-5">
                          <span class="text-900 font-medium text-2xl block">{{ vehicule.prix }} €</span>
                        </div>
        <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
          <Button label="ENVOYER UN EMAIL" class="ml-3 p-button-outlined font-bold" @click="redirectToEmail">
          </Button>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Version</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.version}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Couleur</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.couleur}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Kilometrage</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.kilometrage}} km</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Carburant</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.carburant}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Transmission</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.transmission}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Puissance</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.puissance}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Emission de CO2</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{vehicule.co2}}</div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap">
            <div class="text-500 w-6 md:w-2 font-medium">Date de mise en circulation</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{{ miseCirculation  }}</div>
          </li>
        </ul>
      </div>
      <div class="flex align-items-center text-xl font-light text-900 mb-4">{{ vehicule.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Vehicule } from "@/entities/Vehicule";
import {ref} from "vue";

const props = defineProps({
  vehicule: {
    type: Object as () => Vehicule | null,
    required: true
  }
});
const mailtoLink = ref(`mailto:ce.piat@sources-alma.com?subject=${encodeURIComponent(props.vehicule?.marque || '')} -  ${encodeURIComponent(props.vehicule?.modele?.toString() || '')}-  ${encodeURIComponent(props.vehicule?.prix?.toString() || '')}€&body=`);// const mailtoLink = ref(`mailto:ce.piat@sources-alma.com?subject=${encodeURIComponent(props.vehicule?.marque || '')}&body=`);

let miseCirculation = "";
if (props.vehicule?.miseCirculation) {
   const dateElements = props.vehicule?.miseCirculation.split("-");
   miseCirculation = dateElements[2] + "/" +  dateElements[1] + "/" + dateElements[0];
}

function redirectToEmail() {
  window.location.href = mailtoLink.value;
}

const layout = ref('grid');
const error = ref()
// axios
//     .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
//     .then((response: any) =>{
//
//       vehicules.value = response.data._embedded.vehicule ; console.log(vehicules.value)})
//
// vehicules.value.photos = (await axios
//     .get("http://localhost:8080/vehicule/" + vehicules.value.id + "/photo", {headers: {"Content-Type": "application/json"}})).data._embedded.photo
//     .catch((err: AxiosError) => error.value = err.message)
const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '768px',
    numVisible: 1,
    numScroll: 1
  }
];

</script>

<style scoped>

</style>