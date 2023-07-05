<template>
  <div class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-200 ">
    <RouterLink to="/AdministrationParrot">
    <img src="/src/assets/LogoParrot.svg" alt="LOGO V PARROT" height="50">
    </RouterLink>
    <a class="cursor-pointer block lg:hidden text-700"
       v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
      <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
      <section></section>
      <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
        <RouterLink to="/ajoutvehicule">
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium text-xl transition-colors transition-duration-150 p-ripple">
            <span>AJOUTER UN VEHICULE</span>
          </a>
        </li>
        </RouterLink>
        <RouterLink to="/admin/commentaire">
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium text-xl transition-colors transition-duration-150 p-ripple">
            <span>GESTION DES TEMOIGNAGES</span>
          </a>
        </li>
        </RouterLink>
        <RouterLink to="/ajoutservice">
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium text-xl transition-colors transition-duration-150 p-ripple">
            <span>GESTION DES SERVICES</span>
          </a>
        </li>
        </RouterLink>
        <li>
          <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium text-xl transition-colors transition-duration-150 p-ripple">
            <span>GESTION DES HORAIRES</span>
          </a>
        </li>
        <RouterLink to="/ajoutemploye">
        <li>
          <a v-ripple v-if="isAdministrator()" class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium text-xl transition-colors transition-duration-150 p-ripple">
            <span>GESTION DES ACCES</span>
          </a>
        </li>
        </RouterLink>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {userStore} from "@/stores/userStore";

const store = userStore()

const isAdministrator = (): boolean => {
  return store.employe?.admin === true ;
}

</script>

<style scoped>

</style>