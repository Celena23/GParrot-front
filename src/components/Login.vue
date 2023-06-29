<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="src/assets/LogoParrot.svg" alt="Logo V Parrot" height="50" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Garage PARROT</div>
      <span class="text-600 font-medium line-height-3">Bienvenue</span>
    </div>

    <div>
      <label for="identifier" class="block text-900 font-medium mb-2">Email</label>
      <InputText id="identifier" type="text" class="w-full mb-3" />

      <label for="password" class="block text-900 font-medium mb-2">Mot de passe</label>
      <InputText id="password" type="password" class="w-full mb-3" />

<!--      <div class="flex align-items-center justify-content-between mb-6">-->
<!--        <div class="flex align-items-center">-->
<!--          <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>-->
<!--          <label for="rememberme1">Remember me</label>-->
<!--        </div>-->
<!--        <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>-->
<!--      </div>-->

      <Button label="Se connecter" icon="pi pi-user" class="w-full" @click="login"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios, {AxiosError} from "axios";
import {Vehicule} from "@/entities/Vehicule";
import {Employe} from "@/entities/Employe";


const employes = ref<Employe[] | null>(null);
const error = ref()
const identifier= ref()
const password = ref()
const checkIdPassword = ref(false)

// Fonction de vérification des identifiants
const login = () => {
  // Vérifier si l'identifiant et le mot de passe sont corrects
  if (identifier.value === employes.value.identifier && password.value === employes.value.password) {
    // Accéder au site ou effectuer une action appropriée
    console.log("Identifiants corrects. Accès autorisé.");
  } else {
    // Afficher un message d'erreur ou effectuer une action appropriée
    console.log("Identifiants incorrects. Accès refusé.");
  }
};



axios
    .get("http://localhost:8080/employe", {headers: {"Content-Type": "application/json"}})
    .then((response: any) =>{
      employes.value = response.data._embedded.employe ; console.log(employes.value)})
    .catch((err: AxiosError) => error.value = err.message)
</script>


<style scoped>

</style>