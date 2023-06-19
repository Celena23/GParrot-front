<template>
  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="flex flex-column lg:flex-row align-items-center justify-content-between">
      <div class="text-center lg:text-left lg:pr-8">
<!--        <div class="text-blue-600 font-medium mb-1 text-xl">TAKE THE NEXT STEP</div>-->
        <div class="text-900 font-bold text-6xl mb-5">NOS PRESTATIONS</div>
        <ul class="list-none p-0 m-0">
          <li class="pt-4">
            MECANIQUE ET ENTRETIEN
          </li>
          <li class="pt-4">
            PNEUMATIQUE
          </li>
          <li class="pt-4">
            CAROSSERIE ET PEINTURE
          </li>
          <li class="pt-4">
            FINANCEMENT
          </li>
        </ul>

      </div>
      <div class="mt-5 lg:mt-0 flex flex-wrap lg:flex-nowrap">
        <Button label="TOUTES NOS PRESTATIONS" icon="pi pi-arrow-up-right" iconPos="right" class="px-5 py-3 p-button-outlined font-bold w-full lg:w-auto white-space-nowrap" style="white-space: nowrap"></Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services"
}
</script>

<style scoped>

</style>