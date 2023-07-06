<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <img src="/src/assets/LogoParrot.svg" alt="Logo V Parrot" height="50" class="mb-3">
      <div class="text-900 text-3xl font-medium mb-3">Garage PARROT</div>
      <span class="text-600 font-medium line-height-3">Bienvenue</span>
    </div>
  <Message v-if="error">Accès refusé</Message>
    <div>
      <label for="identifier" class="block text-900 font-medium mb-2">Email</label>
      <InputText v-model="identifier" type="text" class="w-full mb-3" />
      <label for="password" class="block text-900 font-medium mb-2">Mot de passe</label>
      <InputText v-model="password" type="password" class="w-full mb-3" />
      <Button label="Se connecter" icon="pi pi-user" class="w-full" @click="login"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios, {AxiosError} from "axios";
import router from "@/router";
import {userStore} from "@/stores/userStore";

const store = userStore()
const error = ref(false)
const identifier= ref()
const password = ref()

/** Fonction de vérification du login et mot de passe pour se connecter à l'administration du site */
const login = () => {
  error.value = false
  axios
      .get("http://localhost:8080/employe/search/findByIdentifierAndPassword?identifier="+ identifier.value + "&password=" + password.value,{headers: {"Content-Type": "application/json"}})
      .then((result)=> {
        if (result.data) {
          store.employe = result.data
          router.push('/AdministrationParrot')
        }
        else {
          error.value = true
        }
      })
};

</script>


<style scoped>

</style>