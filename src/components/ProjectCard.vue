<script>
import dayjs from "dayjs";

export default {
  props: {
    project: { type: Object, required: true },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
    //getImg(project) costruisce l'URL completo per l'immagine utilizzando l'indirizzo base "http://127.0.0.1:8000/storage/" e il nome del file immagine del progetto.
    getImg(project) {
      return `http://127.0.0.1:8000/storage/${project.thumbnail}`;
    },
    formatData(data) {
      return dayjs(data).format(`DD/MM/YYYY`);
    },
  },
  mounted() {},
};
</script>

<template>
  <router-link
    class="nav-link"
    :to="{ name: `projects.show`, params: { slug: project.slug } }"
  >
    <img :src="getImg(project)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ formatData(project.date) }}</li>
      <li class="list-group-item">{{ project.type.type }}</li>
      <li v-for="technology in project.technologies" class="list-group-item">
        {{ technology.name }}
      </li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">{{ project.link }}</a>
    </div>
  </router-link>
</template>

<style lang="scss" scoped></style>
