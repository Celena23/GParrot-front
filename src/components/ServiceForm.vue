<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Modifier la présentation des services proposés par le garage sur le
      site
    </div>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12 ">
          <label class="font-medium text-900 font-medium">Services Mécanique</label>
          <Textarea v-model="v$.servicemeca.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.servicemeca.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Services Carosserie</label>
          <Textarea v-model="v$.servicecaro.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.servicecaro.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Entretiens et contrôles</label>
          <Textarea v-model="v$.serviceentretien.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.serviceentretien.$error" class="errorMessage">{{ errorMessage }}</div>
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
import axios, {AxiosError} from "axios";
import {useRouter} from "vue-router";
import {userStore} from "@/stores/userStore";

const service = reactive({
  servicemeca: '',
  servicecaro: '',
  serviceentretien: '',
})
const rules = {
  servicemeca: {required},
  servicecaro: {required},
  serviceentretien: {required},
}

const v$ = useVuelidate(rules, service)

let error = ref<string | undefined>();
let errorMessage = 'Ce champ est obligatoire';
const router = useRouter();
const store = userStore();

const onClickSave = async () => {

  error.value = undefined
  const isValid = await v$.value.$validate()
  if (!isValid) error.value = 'Assurez vous que tous les champs obligatoires soient renseignés'
  else {

    axios
        .put("http://localhost:8080/service/1", service, {headers: {"Content-Type": "application/json"},
          auth: { username: store.employe!.identifier!, password: store.employe!.password! }})
        .then((response: any) => {
          router.push('/AdministrationParrot')
        })
        .catch((err: AxiosError) => error.value = err.message)
  }
}

onMounted(async () => {
  const data = (await axios.get("http://localhost:8080/service/1", {headers: {"Content-Type": "application/json"}})).data;
  service.servicemeca = data.servicemeca
  service.servicecaro = data.servicecaro
  service.serviceentretien = data.serviceentretien
})

</script>

<style>
.errorMessage {
  color: red;
}
</style>