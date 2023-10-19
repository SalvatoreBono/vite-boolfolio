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
      success: null,
      errors: null,
    };
  },
  methods: {
    sendData() {
      axios
        .post("http://127.0.0.1:8000/api/contacts", this.formData)
        .then((response) => {
          //Se la richiesta ha successo, il messaggio di successo viene memorizzato
          this.success = response.data.message;
          this.errors = null;
        })
        .catch((e) => {
          // Se si verifica un errore durante la richiesta, il messaggio di errore viene memorizzato
          this.errors = e.response?.data?.message ?? e.message;
        });
    },
  },
  mounted() {},
};
</script>

<template>
  <div class="pt-5 container">
    <!-- se error ha un valore stampa l'errore -->
    <div v-if="errors">{{ errors }}</div>
    <!-- se success non ha un valore stampa  -->
    <form v-if="!success" @submit.prevent="sendData" class="row g-3">
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
    <div v-else>{{ success }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
