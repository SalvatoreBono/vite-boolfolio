<script>
import ProjectCard from "../components/ProjectCard.vue";
//importo axios
import axios from "axios";
export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [],
      pagination: {},
    };
  },
  methods: {
    getApi(url) {
      axios
        //se l'argomento "url" non è definito, verrà utilizzata l'URL predefinito ovvero "http://127.0.0.1:8000/api/projects"
        .get(url ?? "http://127.0.0.1:8000/api/projects")
        .then((response) => {
          const results = response.data;
          this.projects = results.data;
          this.pagination = results;
        });
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="container pt-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div v-for="project in projects" class="col">
        <div class="card" style="width: 18rem">
          <ProjectCard :project="project"></ProjectCard>
        </div>
      </div>
    </div>
    <div class="text-center pt-5">
      <!-- @click="getApi(link.url) =  Quando viene cliccato, richiama il metodo getApi con l'URL specificato nell'elemento link.url -->
      <a
        v-for="link in pagination.links"
        @click="getApi(link.url)"
        class="btn btn-primary me-1 ms-1"
        v-html="link.label"
      ></a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
