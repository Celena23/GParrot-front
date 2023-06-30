
<template>
  <NavBarAdmin/>
  <div class="card">
    <div v-if="error">Aucun véhicule disponible</div>
    <div v-else-if ="!vehicules">chargement</div>
<!--            <div v-else class="card">-->
<!--              <Toolbar class="mb-4">-->
<!--                <template #start>-->
<!--                  <Button label="Ajouter un véhicule" icon="pi pi-plus" severity="success" class="mr-2" @click="AddVehicules" />-->
<!--&lt;!&ndash;                  <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />&ndash;&gt;-->
<!--                </template>-->
<!--              </Toolbar>-->
<!--            </div>-->
    <div class="card">
              <DataTable ref="dt" :value="vehicules" v-model:selection="selectedVehicules" dataKey="id"
                         :paginator="true" :rows="10" :filters="filters"
                         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                  <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                    <h4 class="m-0">Véhicules en vente</h4>
                    <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Rechercher..." />
                        </span>
                  </div>
                </template>
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="marque" header="Marque" sortable style="min-width:12rem">{{ slotProps.data.marque }}</Column>
                <Column field="modele" header="Modèle" sortable style="min-width:12rem">{{slotProps.data.modele}}</Column>
                <Column field="couleur" header="Couleur" sortable style="min-width:12rem">{{slotProps.data.couleur}}</Column>
                <Column field="prix" header="Prix" sortable style="min-width:12rem">{{slotProps.data.prix}}</Column>
                <Column field="kilometrage" header="Km" sortable style="min-width:12rem">{{slotProps.data.kilometrage}}</Column>
                <Column field="transmission" header="Transmission" sortable style="min-width:12rem">{{slotProps.data.transmission}}</Column>
                <Column field="co2" header="CO2" sortable style="min-width:12rem">{{slotProps.data.co2}}</Column>
                <Column field="version" header="Version" sortable style="min-width:12rem">{{slotProps.data.version}}</Column>
                <Column field="puissance" header="Puissance" sortable style="min-width:12rem">{{slotProps.data.puissance}}</Column>
                <Column field="carburant" header="Carburant" sortable style="min-width:12rem">{{slotProps.data.carburant}}</Column>
                <Column field="miseCirculation" header="Date de mise en circulatino" sortable style="min-width:12rem">{{slotProps.data.miseCirculation}}</Column>
                <Column field="dateVente" header="Date de mise en vente" sortable style="min-width:12rem">{{slotProps.data.dateVente}}</Column>
                <Column field="description" header="Description" sortable style="min-width:12rem">{{slotProps.data.description}}</Column>
              </DataTable>
            </div>
          </div>
</template>

<script setup lang="ts">
import axios, {AxiosError} from "axios";
import { Vehicule } from "@/entities/Vehicule";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {FilterMatchMode} from "primevue/api";
import NavBarAdmin from "@/components/NavBarAdmin.vue";
const router = useRouter();
const AddVehicules= () => {
  router.push('/ajoutvehicule')
}

const selectedVehicules = ref();
const filters = ref({
  'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
});

  const vehicules = ref<Vehicule[] | null>(null);
  const error = ref()
  axios
      .get("http://localhost:8080/vehicule", {headers: {"Content-Type": "application/json"}})
      .then((response: any) =>{

       vehicules.value = response.data._embedded.vehicule ; console.log(vehicules.value)})
      .catch((err: AxiosError) => error.value = err.message)

</script>