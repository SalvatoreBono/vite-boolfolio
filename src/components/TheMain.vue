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
        <ProjectCard :project="project"></ProjectCard>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
