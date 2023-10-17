import "bootstrap/dist/js/bootstrap.js";
import { createApp } from 'vue';
import './scss/general.scss';
import App from './App.vue';
//importare router/
import { router } from "./router.js";
//.use(router) = in modo da poter utilizzare le route definite
createApp(App).use(router).mount('#app');
