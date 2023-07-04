  <template>
    <div class="card">
      <DataView ref="dt" :value="vehiculesFiltres" v-model:selection="selectedVehicules" :layout="layout" dataKey="id">
        <template #header>
          <Filters @filter="filterVehicule"/>
        </template>
        <template #grid="slotProps">
          <div class="col-12 sm:col-12 md:12 lg:col-6 xl:col-6 p-6">
            <div class="p-4 border-1 surface-border cursor-pointer" @click="showDialog(slotProps.data)">
              <div class="p-4">
                <div v-if="slotProps.data.photos?.length > 0">
                <img :src="slotProps.data.photos[0].photo" class="w-full overflow-hidden" />
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

      <Dialog v-model:visible="displayDialog" :modal="true" :breakpoints="{'960px': '75vw', '640px': '100vw'}" class="min-w-screen min-h-screen">
        <VehiculeDetails :vehicule="selectedVehicule" />
      </Dialog>
  </template>

<script setup lang="ts">
import { Vehicule } from "@/entities/Vehicule";
import {onMounted, ref} from "vue";
import axios, {AxiosError} from "axios";
import Filters from "@/components/Filters.vue";
import VehiculeDetails from "@/components/VehiculeDetails.vue";
import Dialog from "primevue/dialog";
import {FilterService} from "primevue/api";
import filter = FilterService.filter;

const selectedVehicules = ref();
const vehicules = ref<Vehicule[] | null>(null);

const vehiculesFiltres = ref<Vehicule[]>([]);
const selectedVehicule = ref<Vehicule | null>(null);
const filterVehicule = (filter:any) => {
  console.log(filter)
  vehiculesFiltres.value = vehicules.value?.filter((vehicule) => {
    if (filter.type == 'marque') {
      if (filter.value == 'Toutes les marques') {
        return true;
      }
      return vehicule.marque?.toUpperCase() == filter.value?.toUpperCase()
    }
    return false
  })
}

const filterPrixVehicule = (filter:any) => {
  console.log(filter)
  vehiculesFiltres.value = vehicules.value?.filter((vehicule) => {
    if (filter.type == 'prix') {
      if (filter.value == 'Toutes les prix') {
        return true;
      }
    }
    return false
  })
}

const layout = ref('grid');
const displayDialog = ref(false);
const error = ref()
onMounted(async ()=>{

  const allVehicules =
      (await (axios
          .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}}))).data._embedded.vehicule;
      for (let i=0; i<allVehicules.length ; i++) {
        allVehicules[i].photos = (await axios
            .get("http://localhost:8080/vehicule/" + allVehicules[i].id + "/photo", {headers: {"Content-Type": "application/json"}})).data._embedded.photo
      }vehicules.value = allVehicules;
  vehiculesFiltres.value = allVehicules
})

function showDialog(vehicule: Vehicule) {
  selectedVehicule.value = vehicule;
  displayDialog.value = true;
}


</script>

<style scoped>

</style>