<template>
  <div class="grid grid-nogutter surface-section mt-1 ">
    <div class="col-12 md:col-5 md:pl-6 md:text-left text-center  flex align-items-center">
      <section>
        <span class="block text-2xl md:text-6xl mb-3 ">Garage V.PARROT</span>
        <span class="block text-2xl md:text-6xl font-light text-orange-500 mb-3">Depuis 15 ans à votre service</span>
        <div class="text-1xl md:text-2xl text-color-secondary font-light mb-2">Nous proposons une large gamme de
          services, pour garantir à vos véhicules performance et sécurité.
        </div>
        <div class="text-1xl md:text-2xl text-color-secondary font-light mb-3">Notre showroom propose des véhicules
          d'occasions révisés et de qualité
        </div>
        <p class="block text-2xl md:text-3xl font-light md:mb-3">Ici, vous êtes entre de bonnes mains</p>
      </section>
    </div>
    <div class="image-container col-12 md:col-7 overflow-hidden">
      <div id="imageTopGarage" class="md:ml-auto sm:w-full block bg-primary"
           style="height: 60vh">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#imageTopGarage {
  background-image: url("/src/assets/garageM.jpeg");
  background-size: cover;
  background-position: 80% center;
  clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%);
}
</style>