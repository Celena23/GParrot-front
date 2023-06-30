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
import Toolbar from 'primevue/toolbar';
import { FilterMatchMode } from 'primevue/api';
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import MultiSelect from 'primevue/multiselect';
import Dropdown from 'primevue/dropdown';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import FileUpload from 'primevue/fileupload';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';
import Carousel from "primevue/carousel";
import VueDisqus from 'vue-disqus'
import Textarea from 'primevue/textarea';
import InputSwitch from 'primevue/inputswitch';


const app = createApp(App)
app.use(Primevue)
app.use(createPinia())
app.use(router)
app.use(ToastService)
app.use(VueDisqus, { shortname: 'piatce' })
app.component("InputText", InputText)
app.component("Button", Button)
app.component("Textarea", Textarea)
app.component("FileUpload", FileUpload)
app.component("DataTable",DataTable)
app.component("Column", Column)
app.component("Calendar", Calendar)
app.component("DataView", DataView)
app.component("Toolbar", Toolbar)
app.component("FilterMatchMode", FilterMatchMode)
app.component("DataView", DataView)
app.component("DataViewLayoutOptions", DataViewLayoutOptions)
app.component("MultiSelect", MultiSelect)
app.component("Dropdown", Dropdown)
app.component("TabView", TabView)
app.component("TabPanel", TabPanel)
app.component("FileUpload", FileUpload)
app.component("Dialog", Dialog)
app.component("Carousel", Carousel)
app.component("Galleria", Galleria)
app.component("Textara", Textarea)
app.component("InputSwitch", InputSwitch)

app.mount('#app')
