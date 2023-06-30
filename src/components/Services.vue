<template>
<div class="px-4 py-8 md:px-6 lg:px-8" style="background:radial-gradient(69.84% 69.84% at 50% 100%, rgba(235, 94, 40, 0.25) 0%, rgba(255, 255, 255, 0) 100%);">
<!--<div class="text-blue-600 font-medium mb-3">ALL-IN-ONE</div>-->
<div class="text-900 text-3xl font-light mb-3">Toujours à votre écoute et à votre disposition, nous intervenons sur les organes mécaniques et électriques ou électroniques de votre véhicule.</div>
<div class="text-700 text-sm">Une équipe de professionnels encadrés par un cotech qui assure les réparations et l'entretien de votre véhicule. Nous réalisons également le contrôle et le diagnostic des systèmes embarqués.</div>
<div class="grid mt-7">
  <div class="col-12 md:col-4">
    <div class="shadow-1 p-5 surface-card text-center">
      <div class="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
        <i class="pi pi-cog text-5xl "></i>
      </div>
      <div class="text-900 font-medium text-xl mb-4">Mécanique</div>
      <div class="text-700 text-sm mb-4 line-height-3">{{ services?.servicemeca }}</div>
      <Button label="Demandez un rendez-vous" class="p-button-text font-bold" @click="redirectToEmail"></Button>
    </div>
  </div>
  <div class="col-12 md:col-4">
    <div class="shadow-1 p-5 surface-card text-center">
      <div class="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
        <i class="pi pi-car text-5xl"></i>
      </div>
      <div class="text-900 font-medium text-xl mb-4">Carosserie</div>
      <div class="text-700 text-sm mb-4 line-height-3">Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.</div>
      <Button label="Demandez un rendez-vous" class="p-button-text font-bold" @click="redirectToEmail"></Button>
    </div>
  </div>
  <div class="col-12 md:col-4">
    <div class="shadow-1 p-5 surface-card text-center">
      <div class="border-circle bg-orange-50 p-4 text-orange-600 inline-flex justify-content-center align-items-center mb-4">
        <i class="pi pi-check-circle text-5xl"></i>
      </div>
      <div class="text-900 font-medium text-xl mb-4">Entretien régulier et contrôles</div>
      <div class="text-700 text-sm mb-4 line-height-3">Laoreet sit amet cursus sit. Velit ut tortor pretium viverra. Sollicitudin aliquam ultrices sagittis orci.</div>
      <Button label="Demandez un rendez-vous" class="p-button-text font-bold" @click="redirectToEmail"></Button>
    </div>
  </div>
</div>
</div>
</template>
<script setup lang="ts">

import {Service} from "@/entities/Service";
import axios, {AxiosError} from "axios";
import {ref} from "vue";

const mailtoLink = ref("mailto:ce.piat@sources-alma.com?subject=Demande de rendez-vous&body=");
function redirectToEmail() {
  window.location.href = mailtoLink.value;
}
const services = ref<Service | null>(null);
const error = ref()
axios
    .get("http://localhost:8080/service/1", {headers: {"Content-Type": "application/json"}})
    .then((response: any) =>{
console.log(response.data)
      services.value = response.data ;})
    .catch((err: AxiosError) => error.value = err.message)
</script>

<style scoped>

</style>