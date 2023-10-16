<script>
import ProjectCard from "./ProjectCard.vue";
//importo axios
import axios from "axios";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getApi() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        this.projects = response.data.data;
      });
    },
    //getImg(project) costruisce l'URL completo per l'immagine utilizzando l'indirizzo base "http://127.0.0.1:8000/storage/" e il nome del file immagine del progetto.
    getImg(project) {
      return `http://127.0.0.1:8000/storage/${project.thumbnail}`;
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <main>
    <div class="container pt-5 d-flex gap-4">
      <div v-for="project in projects" class="card" style="width: 18rem">
        <img :src="getImg(project)" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">
            {{ project.description }}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ project.date }}</li>
          <li class="list-group-item">{{ project.type.type }}</li>
          <li
            v-for="technology in project.technologies"
            class="list-group-item"
          >
            {{ technology.name }}
          </li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">{{ project.link }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
