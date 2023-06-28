  <template>
    <div class="card">
      <DataView ref="dt" :value="vehicules" v-model:selection="selectedVehicules" :layout="layout" dataKey="id">
        <template #header>
          <Filters/>
        </template>
        <template #grid="slotProps">
          <div class="col-12 sm:col-12 md:12 lg:col-6 xl:col-6 p-6">
            <div class="p-4 border-1 surface-border cursor-pointer">
              <div class="p-4">
                <div v-if="slotProps.data.photos?.length > 0">
                <img v-for="(photo, index) in slotProps.data.photos" :key="index" :src="photo.photo" class="w-full overflow-hidden" />
                </div>
                <div class="flex align-items-center justify-content-between mt-5 mb-3">
                  <span class="text-900 font-medium text-xl">{{ slotProps.data.marque }} {{ slotProps.data.modele }}</span>
                </div>
                <span class="text-900">{{ slotProps.data.kilometrage }} / {{ slotProps.data.miseCirculation }} / {{ slotProps.data.carburant }}</span>
                <div class="text-900 text-xl font-medium mt-3">{{ slotProps.data.prix }} €</div>
              </div>
            </div>
          </div>
        </template>
      </DataView>
    </div>
  </template>


<script setup lang="ts">

import { Vehicule } from "@/entities/Vehicule";
import {onMounted, ref} from "vue";
import axios, {AxiosError} from "axios";
import Filters from "@/components/Filters.vue";

const selectedVehicules = ref();

const vehicules = ref<Vehicule[] | null>(null);

const vehiculesFiltres = ref<Vehicule[]>([]);


const layout = ref('grid');
const error = ref()
onMounted(async ()=>{

  const allVehicules =
      (await (axios
          .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}}))).data._embedded.vehicule;
      for (let i=0; i<allVehicules.length ; i++) {
        allVehicules[i].photos = (await axios
            .get("http://localhost:8080/vehicule/" + allVehicules[i].id + "/photo", {headers: {"Content-Type": "application/json"}})).data._embedded.photo
      }vehicules.value = allVehicules; console.log(vehicules.value)
})
</script>

<style scoped>

</style>