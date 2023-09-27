import {createRouter, createWebHistory} from 'vue-router'

import VehiculesToSale from "@/views/VehiculesToSale.vue";
import AdminParrotView from "@/views/AdminParrotView.vue";
import LoginView from "@/views/LoginView.vue";
import AddEmployeView from "@/views/AddEmployeView.vue";
import AddVehiculeView from "@/views/AddVehiculeView.vue";
import TestimonialView from "@/views/TestimonialView.vue";
import ServicesView from "@/views/ServicesView.vue";
import AddServiceView from "@/views/AddServiceView.vue";
import AddCommentaireView from "@/views/AddCommentaireView.vue";
import DataTableTestimonials from "@/components/DataTableTestimonials.vue";
import AddHorairesView from "@/views/AddHorairesView.vue";
import HomeView from "@/views/HomeView.vue";

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
        {
            path: '/temoignages',
            name: 'temoignages',
            component: TestimonialView
        },
        {
            path: '/services',
            name: 'services',
            component: ServicesView
        },
        {
            path: '/ajoutservice',
            name: 'ajoutservice',
            component: AddServiceView
        },
        {
            path: '/ajoutcommentaire',
            name: 'ajoutcommentaire',
            component: AddCommentaireView
        },
        {
            path: '/admin/commentaire',
            name: 'admincommentaire',
            component: DataTableTestimonials
        },
        {
            path: '/horaires',
            name: 'horaires',
            component: AddHorairesView
        },
    ]
})

export default router
