<template>

  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Ajouter un véhicule à la vente</div>
    <p class="m-0 mb-4 p-0 text-600 line-height-3 mr-3">Odio euismod lacinia at quis risus sed vulputate odio. Non nisi est sit amet.
      Egestas integer eget aliquet nibh praesent tristique magna.</p>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Marque</label>
          <InputText v-model="v$.marque.$model" type="text" autofocus />
          <div v-if="v$.marque.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Modèle</label>
          <InputText v-model="v$.modele.$model" type="text" />
          <div v-if="v$.modele.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Version</label>
          <InputText v-model="v$.version.$model" type="text" />
          <div v-if="v$.version.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Puissance</label>
          <InputText v-model="v$.puissance.$model" type="text" />
          <div v-if="v$.puissance.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Carburant</label>
          <InputText v-model="v$.carburant.$model" type="text" />
          <div v-if="v$.carburant.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Transmission</label>
          <InputText v-model="v$.transmission.$model" type="text" />
          <div v-if="v$.transmission.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Kilometrage</label>
          <InputText v-model="v$.kilometrage.$model" type="text" />
          <div v-if="v$.kilometrage.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">CO2</label>
          <InputText v-model="v$.co2.$model" type="text" />
          <div v-if="v$.co2.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Prix de vente</label>
          <InputText v-model="v$.prix.$model" type="text" />
          <div v-if="v$.prix.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Couleur</label>
          <InputText v-model="v$.couleur.$model" type="text" />
          <div v-if="v$.modele.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Mise en circulation</label>
          <InputText type="date" v-model="v$.miseCirculation.$model" />
          <div v-if="v$.miseCirculation.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-6">
          <label class="font-medium text-900 font-medium">Date de mise en vente</label>
          <InputText type="date" v-model="v$.dateVente.$model" />
          <div v-if="v$.dateVente.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="field mb-4 col-12 md:col-12">
          <label class="font-medium text-900 font-medium">Description</label>
          <Textarea v-model="v$.description.$model" type="text" :rows="5" :autoResize="true"></Textarea>
          <div v-if="v$.description.$error" class="errorMessage">{{errorMessage}}</div>
        </div>
        <div class="field mb-4 col-12 md:col-12">
          <label  class="font-medium text-900 font-medium">Photos</label>
          <FileUpload v-model="vehicule.photos"/>
        </div>

<!--          <Dropdown id="country2 v-model="selectedCountry2" :options="countries" optionLabel="name" :filter="true" filterBy="name" :showClear="true" placeholder="Select a Country">-->
<!--          <template #option="slotProps">-->
<!--            <div class="flex align-items-center">-->
<!--              <img src="images/blocks/flag/flag_placeholder.png" :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()" style="width:18px"/>-->
<!--              <div>{{slotProps.option.name}}</div>-->
<!--            </div>-->
<!--          </template>-->
<!--          </Dropdown>-->

        <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
        <div class="col-12">
          <Button label="Sauvegarder et mettre en ligne" class="w-auto mt-3 @click" @click="onClickSave"></Button>
          <RouterLink to="/AdministrationParrot">
            <Button label="Annuler" class="w-auto mt-3"></Button>
          </RouterLink>
        </div>
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

const vehicule = reactive({
  marque:'',
  miseCirculation:'',
  kilometrage:'',
  description:'',
  modele:'',
  version:'',
  puissance:'',
  carburant:'',
  transmission:'',
  co2:'',
  couleur:'',
  prix:'',
  dateVente:'',
  photos:[]
})
const rules = {
  marque: { required },
  miseCirculation: {required},
  kilometrage: {required},
  description: {required},
  modele: {required},
  version: {required},
  puissance: {required},
  carburant: {required},
  transmission: {required},
  co2: {},
  couleur: {required},
  prix: {required},
  dateVente: {required},
  photos: {},
}

const v$ = useVuelidate(rules, vehicule)

let error = ref<string | undefined>();
let errorMessage = 'Ce champ est obligatoire';
const router = useRouter();


const onClickSave = async () => {
  error.value = undefined
  const isValid = await v$.value.$validate()
  if (!isValid) error.value = 'Assurez vous que tous les champs obligatoires soient renseignés'
  else {

    axios
        .post("http://localhost:8080/vehicule", vehicule, {headers: {"Content-Type": "application/json"}})
        .then(() => router.push('/AdministrationParrot'))
        .catch((err: AxiosError) => error.value = err.message)
  }
}

</script>

<style>
.errorMessage {
  color: red;
}
</style>