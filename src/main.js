import "bootstrap/dist/js/bootstrap.js";
import { createApp } from 'vue';
import App from './App.vue';
import './scss/general.scss';
//importare router
import { router } from "./router.js";
//.use(router) = in modo da poter utilizzare le route
createApp(App).use(router).mount('#app');
