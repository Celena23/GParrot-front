import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiculesToSale from "@/views/VehiculesToSale.vue";
import AdminParrotView from "@/views/AdminParrotView.vue";
import LoginView from "@/views/LoginView.vue";
import VehiculeForm from "@/components/VehiculeForm.vue";
import EmployeForm from "@/components/EmployeForm.vue";
import DataTableVehicule from "@/components/DataTableVehicule.vue";
import AddEmployeView from "@/views/AddEmployeView.vue";
import AddVehiculeView from "@/views/AddVehiculeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicules',
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
    // {
    //   path: '/vehiculesàvendre',
    //   name: 'Vehiculesist',
    //   component: DataTableVehicule
    // },
    {
      path: '/ajoutvehicule',
      name: 'AddVehicule',
      component: AddVehiculeView
    },
    {
      path: '/ajoutemploye',
      name: 'ajoutemploye',
      component: AddEmployeView
    },
  ]
})

export default router
