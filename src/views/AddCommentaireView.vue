<template>
  <NavBarAdmin/>
  <div id="containerForm">
  <Testimonials :admin="true">
  </Testimonials>
  </div>
</template>

<script setup lang="ts">

import Testimonials from "@/components/Testimonials.vue";
import NavBarAdmin from "@/components/NavBarAdmin.vue";
</script>

<style scoped>
#containerForm {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 100%;
}
</style>

