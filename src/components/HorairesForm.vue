<template>
  <div class="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div class="text-900 font-medium text-xl mb-3">Horaires d'ouverture du garage
    </div>
    <div class="surface-card p-4 shadow-2 border-round">
      <div class="grid formgrid p-fluid">
        <div class="field mb-4 col-12 ">
          <label class="font-medium text-900 font-medium">Heure d'ouverture le matin en semaine (Lundi, mardi, mercredi, jeudi et vendredi)</label>
          <Textarea v-model="v$.morningWeekDayStart.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.morningWeekDayStart.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Heure de fermeture le midi en semaine (Lundi, mardi, mercredi, jeudi et vendredi)</label>
          <Textarea v-model="v$.morningWeekDayEnd.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.morningWeekDayEnd.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Heure d'ouverture l'après-midi en semaine (Lundi, mardi, mercredi, jeudi et vendredi)</label>
          <Textarea v-model="v$.afternoonWeekDayStart.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.afternoonWeekDayStart.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Heure de fermeture l'après-midi en semaine (Lundi, mardi, mercredi, jeudi et vendredi)</label>
          <Textarea v-model="v$.afternoonWeekDayEnd.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.afternoonWeekDayEnd.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Heure d'ouverture le samedi</label>
          <Textarea v-model="v$.morningSaturdayStart.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.morningSaturdayStart.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
        <div class="field mb-4 col-12">
          <label class="font-medium text-900 font-medium">Heure de fermeture le samedi</label>
          <Textarea v-model="v$.morningSaturdayEnd.$model" autoResize rows="5" cols="30" type="text"/>
          <div v-if="v$.morningSaturdayEnd.$error" class="errorMessage">{{ errorMessage }}</div>
        </div>
      </div>
      <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
      <div class="col-12">
        <Button label="Sauvegarder" class="w-auto mt-3 @click" @click="onClickSave"></Button>
          <Button label="Annuler" class="w-auto mt-3 ml-3"></Button>
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
  morningWeekDayStart: '',
  morningWeekDayEnd: '',
  afternoonWeekDayStart: '',
  afternoonWeekDayEnd:'',
  morningSaturdayStart:'',
  morningSaturdayEnd:'',
})
const rules = {
  morningWeekDayStart: {required},
  morningWeekDayEnd: {required},
  afternoonWeekDayStart: {required},
  afternoonWeekDayEnd: {required},
  morningSaturdayStart: {required},
  morningSaturdayEnd: {required},
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
        .put("http://localhost:8080/horaires/1", service, {
          headers: {"Content-Type": "application/json"},
          auth: { username: store.employe!.identifier!, password: store.employe!.password! }
        })
        .then((response: any) => {
          router.push('/AdministrationParrot')
        })
        .catch((err: AxiosError) => error.value = err.message)
  }
}

onMounted(async () => {
  const data = (await axios.get("http://localhost:8080/horaires/1", {headers: {"Content-Type": "application/json"}})).data;
  service.morningWeekDayStart = data.morningWeekDayStart
  service.morningWeekDayEnd = data.morningWeekDayEnd
  service.afternoonWeekDayStart = data.afternoonWeekDayStart
  service.afternoonWeekDayEnd = data.afternoonWeekDayEnd
  service.morningSaturdayStart = data.morningSaturdayStart
  service.morningSaturdayEnd = data.morningSaturdayEnd
})
</script>

<style>
.errorMessage {
  color: red;
}
</style>