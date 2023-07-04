<template>

  <div class="grid">
    <Carousel :value="commentaires" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="border-1 surface-border border-round m-2 text-center py-5 px-3" style="height: 90%">
          <div>
            <h4 class="mb-1 font-light text-xl">{{ slotProps.data.commentaire }}</h4>
            <h6 class=" font-light text-sm ">{{ slotProps.data.name }}</h6>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import {Commentaire} from "@/entities/Commentaire";
import axios, {AxiosError} from "axios";
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const layout = ref('grid');


const commentaires = ref<Commentaire[] | null>(null);
const selectedCommentaires = ref();
const error = ref();
axios
    .get("http://localhost:8080/commentaire/search/findByValid?valid=true", {headers: {"Content-Type": "application/json"}})
    .then((response: any) => {

      commentaires.value = response.data._embedded.commentaire;
    })
    .catch((err: AxiosError) => error.value = err.message)

const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<style scoped>
.grid {
  margin-top: 5rem;
  /*width: 100%;*/

}

</style>