import './assets/main.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Checkbox from 'primevue/checkbox';
import Dropdown from 'primevue/dropdown';
import Divider from 'primevue/divider';

const app = createApp(App);

app.use(PrimeVue);

app.component('Checkbox', Checkbox);
app.component('Dropdown', Dropdown);
app.component('Divider', Divider);

app.mount("#app");

