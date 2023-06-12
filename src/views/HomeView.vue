<script setup lang="ts">

import NavBar from "@/components/NavBar.vue";
import Hero from "@/components/Hero.vue";
import VehiculeList from "@/components/VehiculeList.vue";
import Prestations from "@/components/Prestations.vue";
</script>

<template>
  <NavBar/>
  <Hero/>
  <VehiculeList/>
  <Button label="VOIR TOUS NOS VEHICULES" class="ml-3 p-button-outlined font-bold"></Button>
  <div class="p-6">
    <div class="border-2 border-black-alpha-90 surface-border border-round surface-card text-2xl line-height-4">
    <p>
      Nous assurons toutes les réparations mécaniques de votre véhicule, diagnostic, révision, entretien, réparation. <br>
      Prise en charge toute panne sur tout véhicule.<br>
      Toujours à votre écoute et à votre disposition, nous intervenons sur les organes mécaniques et électriques ou électroniques de votre véhicule.<br>
      Une équipe de professionnels encadrés par un cotech qui assure les réparations et l'entretien de votre véhicule. Nous réalisons également le contrôle et le diagnostic des systèmes embarqués.
    </p>
    </div>
  </div>
<Prestations/>
  <main>
  </main>
</template>
