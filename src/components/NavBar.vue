<template>
  <div class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-200 ">
    <img src="images/blocks/logos/hyper.svg" alt="LOGO V PARROT" height="50">
    <a class="cursor-pointer block lg:hidden text-700"
       v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
      <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
      <section></section>
      <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
        <RouterLink to="/vehicules">
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-bold transition-colors transition-duration-150 p-ripple">
            <span>NOS VEHICULES</span>
          </a>
        </li>
        </RouterLink>
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-bold transition-colors transition-duration-150 p-ripple">
            <span>NOS SERVICES</span>
          </a>
        </li>
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-bold transition-colors transition-duration-150 p-ripple">
            <span>TEMOIGNAGES</span>
          </a>
        </li>
      </ul>
      <div class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
        <Button label="NOUS CONTACTER" class="ml-3 p-button-outlined font-bold" @click="redirectToEmail">
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const mailtoLink = ref("mailto:ce.piat@sources-alma.com?subject=Contact depuis votre site&body=");
function redirectToEmail() {
  window.location.href = mailtoLink.value;
}
</script>

<style scoped>

</style>