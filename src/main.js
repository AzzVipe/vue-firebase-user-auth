import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import PrimeVue from 'primevue/config';
import MyButton from 'primevue/button';
import MyCard from 'primevue/card';
import InputText from 'primevue/inputtext';
import MenuBar from 'primevue/menubar';

import 'primevue/resources/themes/md-dark-deeppurple/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const firebaseConfig = {
  apiKey: "AIzaSyCyWXOXsxD9BS8Ovau8QazkLwNSB36Si_g",
  authDomain: "test-5cd4e.firebaseapp.com",
  projectId: "test-5cd4e",
  storageBucket: "test-5cd4e.appspot.com",
  messagingSenderId: "598822562552",
  appId: "1:598822562552:web:0387301486b57aa7a8a90d"
};

initializeApp(firebaseConfig)

const app = createApp(App)

app.component('MyButton', MyButton);
app.component('MyCard', MyCard);
app.component('InputText', InputText);
app.component('MenuBar', MenuBar);
app.use(PrimeVue)
app.use(router)

app.mount('#app')