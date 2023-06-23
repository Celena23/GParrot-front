import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Primevue, {usePrimeVue} from 'primevue/config';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '../public/theme/celena/theme.css';


import 'primeicons/primeicons.css';

import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import ToastService from 'primevue/toastservice';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Calendar from 'primevue/calendar';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional



const app = createApp(App)
app.use(Primevue)
app.use(createPinia())
app.use(router)
app.use(ToastService)
app.component("InputText", InputText)
app.component("Button", Button)
app.component("Textarea", Textarea)
app.component("FileUpload", FileUpload)
app.component("DataTable",DataTable)
app.component("Column", Column)
app.component("Calendar", Calendar)
app.component("DataView", DataView)


app.mount('#app')
