<template>
  <div class="surface-section px-4 py-2 md:px-6 lg:px-8">
    <div class="grid mb-7">
      <div class="col-12 lg:col-6">
        <div v-if="vehicule.photos && vehicule.photos.length > 0">
          <Galleria class="border-1" :value="vehicule.photos" :responsiveOptions="responsiveOptions" :numVisible="5"
                    containerStyle="max-width: 640px">
            <template #item="slotProps">
              <img :src="slotProps.item.photo" style="width: 100%"/>
            </template>
            <template #thumbnail="slotProps">
              <img :src="slotProps.item.photo" style="max-width: 50px"/>
            </template>
          </Galleria>
        </div>
      </div>
      <div class="col-12 lg:col-6 py-3 lg:pl-6" v-if="vehicule">
        <div class="flex align-items-center text-6xl font-medium text-900 mb-4">{{ vehicule.marque }} {{ vehicule.modele }}
        </div>
        <div class="flex align-items-center justify-content-between mb-5">
          <span class="text-900 font-medium text-2xl block">{{ vehicule.prix }} €</span>
        </div>
        <div
            class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
          <Button label="Nous contacter pour en savoir plus" class="ml-3 p-button-outlined font-bold"
                  @click="redirectToEmail">
          </Button>
        </div>
        <ul class="list-none p-0 m-0">
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 md:text-xl">Version</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.version }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Couleur</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.couleur }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Kilometrage</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.kilometrage }} km
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Carburant</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.carburant }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Transmission</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{vehicule.transmission}}
            </div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Puissance</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.puissance }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2  flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Emission de CO2</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ vehicule.co2 }}</div>
          </li>
          <li class="flex align-items-center py-3 px-2 flex-wrap">
            <div class="text-700 w-6 md:w-2 font-medium md:text-xl">Date de mise en circulation</div>
            <div class="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 md:text-2xl">{{ miseCirculation }}</div>
          </li>
        </ul>
      </div>
      <div class="flex align-items-center text-xl font-light text-900 mb-4">{{ vehicule.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {Vehicule} from "@/entities/Vehicule";
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
  miseCirculation = dateElements[2] + "/" + dateElements[1] + "/" + dateElements[0];
}

function redirectToEmail() {
  window.location.href = mailtoLink.value;
}

const layout = ref('grid');
const error = ref()
const responsiveOptions = ref([
  {
    breakpoint: '991px',
    numVisible: 4
  },
  {
    breakpoint: '767px',
    numVisible: 3
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
]);

</script>

<style scoped>

</style>