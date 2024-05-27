import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Firebase
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDomE8ijFWtKZhf9UXaOhBMPDfx7WZa460",
  authDomain: "programacion-web-be220.firebaseapp.com",
  projectId: "programacion-web-be220",
  storageBucket: "programacion-web-be220.appspot.com",
  messagingSenderId: "809186248696",
  appId: "1:809186248696:web:f0c3ca83bdd33af9b3b80d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//Termina

const app = createApp(App)

app.use(router)

app.mount('#app')
