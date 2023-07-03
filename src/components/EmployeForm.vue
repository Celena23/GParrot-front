<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Ajouter un accès à l'administration du site</div>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Nom</label>
          <InputText v-model="v$.name.$model" type="text" autofocus />
          <div v-if="v$.name.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Prénom</label>
          <InputText v-model="v$.firstname.$model" type="text" />
          <div v-if="v$.firstname.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Identifiant</label>
          <InputText v-model="v$.identifier.$model" type="text" />
          <div v-if="v$.identifier.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Mot de passe</label>
          <InputText v-model="v$.password.$model" type="text" />
          <div v-if="v$.password.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        </div>
        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="col-12">
          <Button label="Sauvegarder" class="w-auto mt-3 @click" @click="onClickSave"></Button>
          <RouterLink to="/AdministrationParrot">
            <Button label="Annuler" class="w-auto mt-3 ml-3"></Button>
          </RouterLink>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import { useVuelidate } from '@vuelidate/core';
import {required} from "@vuelidate/validators";
import axios, { AxiosError, AxiosResponse } from "axios";
import {useRouter} from "vue-router";
import NavBarAdmin from "@/components/NavBarAdmin.vue";

const employe = reactive({
  name:'',
  firstname:'',
  identifier:'',
  password:'',
})
const rules = {
  name: { required },
  firstname: {required},
  identifier: {required},
  password: {required},
}

const v$ = useVuelidate(rules, employe)

let error = ref<string | undefined>();
let errorMessage = 'Ce champ est obligatoire';
const router = useRouter();

const onClickSave = async () => {

  error.value = undefined
  const isValid = await v$.value.$validate()
  if (!isValid) error.value = 'Assurez vous que tous les champs obligatoires soient renseignés'
  else {

    axios
        .post("http://localhost:8080/employe", employe, {headers: {"Content-Type": "application/json"}})
        .then((response: any) => {
            router.push('/AdministrationParrot')})
        .catch((err: AxiosError) => error.value = err.message)
  }
}
</script>

<style>
.errorMessage {
  color: red;
}
</style>