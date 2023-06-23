
<template>
  <div class="card">
    <Button @click="AddVehicules">ajouter un véhicule</Button>
    <div v-if="error">Ca marche pas</div>
    <div v-else-if ="!vehicules">chargement</div>

    <DataView v-else :value="vehicules">
      <template #list="slotProps">
        salut
        {{JSON.stringify(slotProps)}}
        <div class="col-12">
          <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
<!--            <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`" :alt="slotProps.data.name" />-->
            <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
              <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                <span class="text-2xl font-semibold">{{ slotProps.data.marque }}</span>
<!--                <Button icon="pi pi-shopping-cart" rounded :disabled="slotProps.data.inventoryStatus === 'OUTOFSTOCK'"></Button>-->
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
import axios, {AxiosError} from "axios";
import { Vehicule } from "@/entities/Vehicule";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const AddVehicules= () => {
  router.push('/ajoutvehicule')
}

  const vehicules = ref<Vehicule[] | null>(null);
  const error = ref()
  axios
      .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
      .then((response: any) =>{

       vehicules.value = response.data._embedded.vehicule ; console.log(vehicules.value)})
      .catch((err: AxiosError) => error.value = err.message)
</script>