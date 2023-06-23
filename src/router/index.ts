import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vehicules from "@/views/Vehicules.vue";
import VehiculesToSale from "@/views/VehiculesToSale.vue";
import AdminParrot from "@/views/AdminParrot.vue";
import AdminParrotView from "@/views/AdminParrotView.vue";
import LoginView from "@/views/LoginView.vue";
import VehiculeForm from "@/components/VehiculeForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Véhicules',
      name: 'Véhicules',
      component: VehiculesToSale
    },
    {
      path: '/AdministrationParrot',
      name: 'AdministrationParrot',
      component: AdminParrotView
    },
    {
    path: '/LoginParrot',
    name: 'LoginParrot',
    component: LoginView
},
    {
      path: '/ajoutvehicule',
      name: 'AddVehicule',
      component: VehiculeForm
    },
  ]
})

export default router
