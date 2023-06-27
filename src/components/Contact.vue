<template>

  <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div class="grid">
      <div class="col-12 md:col-6">
        <div class="p-fluid pr-0 md:pr-6">
          <div class="field">
            <label for="name" class="font-medium">Nom</label>
            <InputText id="name" type="text" class="py-3 px-2 text-lg" />
          </div>
          <div class="field">
            <label for="email" class="font-medium">Email</label>
            <InputText id="email" type="text" class="py-3 px-2 text-lg" />
          </div>
          <div class="field">
            <label for="phone" class="font-medium">Numéro de téléphone</label>
            <InputText id="phone" type="text" class="py-3 px-2 text-lg" />
          </div>
          <div class="field">
            <label for="message" class="font-medium">Message</label>
            <Textarea id="message" :rows="6" :autoResize="true" class="py-3 px-2 text-lg"></Textarea>
          </div>
          <Button label="Envoyer le message" icon="pi pi-send" class="w-auto"></Button>
        </div>
      </div>
      <div class="col-12 md:col-6 bg-no-repeat bg-right-bottom" style="background-image: url('images/blocks/contact/contact-1.png')">
        <div class="text-900 text-2xl font-medium mb-6">Nos coordonnées</div>
        <div class="text-700 line-height-3 mb-6">
          <ul class="list-none p-0 m-0 mt-6 text-700">
            <li class="flex align-items-center mb-3">
              <i class="pi pi-home mr-2"></i>
              <span>Garage Vincent PARROT</span>
            </li>
            <li class="">18 rue de la clef à molette</li>
            <li>59999 RADIATOR SPRINGS</li>
          </ul>
        <ul class="list-none p-0 m-0 mt-6 text-700">
          <li class="flex align-items-center mb-3">
            <i class="pi pi-phone mr-2"></i>
            <span>03 20 00 00 00</span>
          </li>
          <li class="flex align-items-center">
            <i class="pi pi-inbox mr-2"></i>
            <span>contact@gparrot.fr</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>