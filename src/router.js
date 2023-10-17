// configurazione del  Vue Router
import { createRouter, createWebHistory } from "vue-router";

//importo i componenti delle pages
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import HomePage from "./pages/Home.vue";
import Projects from "./pages/Projects.vue";

//definizione delle routes stile web.php
const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    },
    {
        path: "/projects",
        name: "projects.index",
        component: Projects,
    }
]
const router = createRouter({
    /* history: createWebHistory() = consente di avere percorsi URL puliti senza il carattere "#" */
    history: createWebHistory(), routes,
});

//viene esportato il router così da essere utilizzato in altre parti
export { router };

