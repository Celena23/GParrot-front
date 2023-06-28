<template>
  <FileUpload
      ref="uploadForm"
      name="demo[]"
      accept="image/*"
      :maxFileSize="1000000"
      :show-cancel-button="false"
      :show-upload-button="false"
      :show-c-button="false"
      choose-label="Ajouter"
  >
    <template #empty>
      <div class="flex align-items-center justify-content-center flex-column">
        <i class="pi pi-cloud-upload border-2 border-circle p-5 text-8xl text-400 border-400" />
        <p class="mt-4 mb-0">Glisser vos photos ici pour les importer</p>
      </div>
    </template>
  </FileUpload>
</template>

<script setup lang="ts">
import {ref} from "vue";
import FileUpload from "primevue/fileupload";
import axios from "axios";

// Nécessaire pour récupérer les images
// Il faut également ajouter l'attribut ref avec le même nom dans la balise HTML FileUpload
const uploadForm = ref<any>();

// Sauvegarde du véhicule
// Reprendre la fonction existante de sauvegarde du véhicule et ajouter la fonction de sauvegarde des photos dans la partie then(()
const onSaveVehicule = () => {
  const vehicule = {};

  axios.post("http://localhost:8080/vehicule", vehicule, { headers: { "Content-Type": "application/json"}})
      .then((response: any) => {
        // Si sauvegarde du véhicule est correcte, on sauvegarde les photos en utilisant
        // la clé du véhicule qui doit être dans la réponse afin de l'associer à la photo
        savePhotos(response.id);
      });
}

/**
 * Sauvegarde des photos
 *
 * @param vehiculeId Identifiant du véhicule
 */


</script>