import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {Employe} from "@/entities/Employe";

export const userStore = defineStore('user', {
  state: () => {
    return {
      employe: null as Employe | null
    }
  },
})
