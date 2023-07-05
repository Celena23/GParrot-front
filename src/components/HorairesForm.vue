<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Modifier la présentation des horairess proposés par le garage sur le
      site
    </div>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12 ">
          <label class="font-medium text-900 font-medium">Services Mécanique</label>
          <Textarea v-model="v$.horairesmeca.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.horairesmeca.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Services Carosserie</label>
          <Textarea v-model="v$.horairescaro.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.horairescaro.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Entretiens et contrôles</label>
          <Textarea v-model="v$.horairesentretien.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.horairesentretien.$error" class="errorMessage">{{ errorMessage }}</div>
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
import {onMounted, reactive, ref} from "vue";
import {useVuelidate} from '@vuelidate/core';
import {required} from "@vuelidate/validators";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRouter} from "vue-router";

const horaires = reactive({
  horairesmeca: '',
  horairescaro: '',
  horairesentretien: '',
})
const rules = {
  horairesmeca: {required},
  horairescaro: {required},
  horairesentretien: {required},
}

const v$ = useVuelidate(rules, horaires)

let error = ref<string | undefined>();
let errorMessage = 'Ce champ est obligatoire';
const router = useRouter();

const onClickSave = async () => {

  error.value = undefined
  const isValid = await v$.value.$validate()
  if (!isValid) error.value = 'Assurez vous que tous les champs obligatoires soient renseignés'
  else {

    axios
        .post("http://localhost:8080/horaires", horaires, {headers: {"Content-Type": "application/json"}})
        .then((response: any) => {
          router.push('/AdministrationParrot')
        })
        .catch((err: AxiosError) => error.value = err.message)
  }
}
</script>

<style>
.errorMessage {
  color: red;
}
</style>