<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      success: false,
      error: null,
    };
  },
  methods: {
    sendData() {
      axios
        .post("http://127.0.0.1:8000/api/contacts", this.formData)
        .then(() => {
          this.success = true;
        })
        .catch((e) => {
          this.error = e.message;
        });
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="pt-5 container">
    <form @submit.prevent="sendData" class="row g-3">
      <div class="col-md-6">
        <label for="inputName" class="form-label">Nome</label>
        <input
          type="text"
          class="form-control"
          id="inputName"
          v-model="formData.name"
        />
      </div>
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          id="inputEmail4"
          v-model="formData.email"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress" class="form-label">Messaggio</label>
        <textarea
          type="text"
          class="form-control"
          id="inputTextarea"
          placeholder="Messaggio"
          v-model="formData.message"
        ></textarea>
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Invia</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
