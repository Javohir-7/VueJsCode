import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import Button from "primevue/button"

const app = createApp(App)
app.use(PrimeVue, {
    unstyled: true,
    theme: {
        preset: Aura
    }
});
app.component('Button', Button);
app.use(router)

app.mount('#app')
