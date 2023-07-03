
<template>
  <NavBarAdmin/>
  <div class="card">
    <div v-if="error">Aucun commentaire disponible</div>
    <div v-else-if ="!commentaires">chargement</div>
    <div class="card">
              <DataTable ref="dt" :value="commentaires" v-model:selection="selectedCommentaires" dataKey="id"
                         :paginator="true" :rows="10" :filters="filters"
                         paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5,10,25]"
                         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products">
                <template #header>
                  <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                    <h4 class="m-0">Tous les commentaires</h4>
                    <span class="p-input-icon-left">
                            <i class="pi pi-search" />
                            <InputText v-model="filters['global'].value" placeholder="Rechercher..." />
                        </span>
                  </div>
                  <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                    <Button label="Ajouter un commentaire" icon="pi pi-plus" severity="success" class="mr-2" @click="addCommentaire"/>
                </div>
                </template>
                <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
                <Column field="name" header="Nom" sortable style="min-width:12rem" />
                <Column field="commentaire" header="Commentaire" sortable style="min-width:12rem" />
                <Column field="date" header="Date" sortable style="min-width:12rem" />
                <Column field="valid" header="Visible" sortable style="min-width:12rem">
                  <template #body="slotProps"><InputSwitch v-model="slotProps.data.valid" @change="validComment(slotProps.data)"/> </template>
                  {{slotProps.data.valid}}</Column>

              </DataTable>
            </div>
          </div>
</template>

<script setup lang="ts">
import axios, {AxiosError} from "axios";
import { Commentaire } from "@/entities/Commentaire";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {FilterMatchMode} from "primevue/api";
import NavBarAdmin from "@/components/NavBarAdmin.vue";
import Testimonials from "@/components/Testimonials.vue";
const router = useRouter();
const addCommentaire= () => {
  router.push('/ajoutcommentaire')
}
const validComment = (comment : any) => {
  console.log(comment)
  axios
      .put ("http://localhost:8080/commentaire/" + comment.id, comment, {headers: {"Content-Type": "application/json"}})

}
const selectedCommentaires = ref();
const filters = ref({
  'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
});

  const commentaires = ref<Commentaire[] | null>(null);
  const error = ref()
  axios
      .get("http://localhost:8080/commentaire/search/findByValid?valid=false", {headers: {"Content-Type": "application/json"}})
      .then((response: any) =>{

       commentaires.value = response.data._embedded.commentaire ;})
      .catch((err: AxiosError) => error.value = err.message)

</script>