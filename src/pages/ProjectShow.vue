<script>
import axios from "axios";
import dayjs from "dayjs";

export default {
  components: {},
  data() {
    return {
      project: {},
    };
  },
  methods: {
    getApi() {
      axios
        .get("http://127.0.0.1:8000/api/projects/" + this.$route.params.slug)
        .then((response) => {
          this.project = response.data;
        });
    },
    getImg(project) {
      return `http://127.0.0.1:8000/storage/${project.thumbnail}`;
    },
    formatData(data) {
      return dayjs(data).format(`DD/MM/YYYY`);
    },
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <div class="card mb-3">
    <img :src="getImg(project)" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ project.title }}</h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <p class="card-text">
        <small class="text-body-secondary">{{
          formatData(project.date)
        }}</small>
      </p>
      <div>{{ project.type.type }}</div>
      <div v-for="technology in project.technologies">
        {{ technology.name }}
      </div>
      <div>
        <a href="#">{{ project.link }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 50px;
}
</style>
