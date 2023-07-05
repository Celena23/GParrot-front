<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-900 font-medium  text-center text-xl mb-3">Dites nous, ce que vous pensez de nous !</div>
    <div class="field mb-4 col-12 md:col-6">
      <label class="block text-900 font-medium mb-2 autofocus">Nom</label>
      <InputText v-model="v$.name.$model" type="text" autofocus class="w-full mb-3" maxlength="255"/>
      <div v-if="v$.name.$error" class="errorMessage">{{ errorMessage }}</div>
    </div>
    <div class="field mb-4 col-12 md:col-6">
      <label class="block text-900 font-medium mb-2">Commentaire</label>
      <Textarea v-model="v$.commentaire.$model" type="text" class="w-full mb-3" maxlength="255"/>
      <div v-if="v$.commentaire.$error" class="errorMessage">{{ errorMessage }}</div>
    </div>
    <InputSwitch v-model="v$.valid.$model" v-if="admin"/>
    <div class="surface-border border-top-1 opacity-50 mb-3 col-12"></div>
    <div class="col-12">
      <Button label="Envoyer" icon="pi pi-send" class="w-auto mt-3 @click" @click="onClickSave"></Button>
      <RouterLink to="/admin/commentaire">
      <Button label="Annuler" class="w-auto mt-3 ml-3"></Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive, ref} from "vue";
import {useVuelidate} from '@vuelidate/core';
import {maxLength, required} from "@vuelidate/validators";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useRouter} from "vue-router";

const commentaire = reactive({
  name: '',
  commentaire: '',
  date: new Date(),
  valid:false
})
const rules = {
  name: {required},
  commentaire: {required},
  date: {required},
  valid:{},
}

const v$ = useVuelidate(rules, commentaire)

let error = ref<string | undefined>();
let success = ref(false);

let errorMessage = 'Ce champ est obligatoire';
const router = useRouter();

defineProps<{ admin?: boolean }>()
const onClickSave = async () => {
  success.value = false
  error.value = undefined
  const isValid = await v$.value.$validate()
  if (!isValid) error.value = 'Assurez vous que tous les champs obligatoires soient renseignés'
  else {

    axios
        .post("http://localhost:8080/commentaire", commentaire, {headers: {"Content-Type": "application/json"}})
        .then((response: any) => {
          router.push('/admin/commentaire')
          success.value = true
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

