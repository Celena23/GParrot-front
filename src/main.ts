import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Primevue, {usePrimeVue} from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '../public/theme/celena/theme.css'

import 'primeicons/primeicons.css';

import InputText from "primevue/inputtext";
import Button from "primevue/button";


const app = createApp(App)
app.use(Primevue)
app.use(createPinia())
app.use(router)
app.component("InputText", InputText)
app.component("Button", Button)

app.mount('#app')
