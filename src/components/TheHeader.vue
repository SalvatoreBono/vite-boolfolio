<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-navabar">
      <div class="container-fluid">
        <div>
          <a class="navbar-brand" href="#">
            <img
              src="../assets/image.png"
              alt="Bootstrap"
              width="40"
              height="40"
            />
          </a>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="pt-1 pb-1">
            <i class="fa-solid fa-bars fa-lg" style="color: #efeff1"></i>
          </div>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <!-- Per creare dei link alle varie pagine occorre usare il tag router-link con l’attributo to. -->
              <router-link :to="{ name: `home` }" class="nav-link"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: `about` }" class="nav-link"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: `projects.index` }" class="nav-link"
                >Projects</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: `contact` }" class="nav-link"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;
header {
  font-weight: 600;
}
.bg-navabar {
  background-color: $color-primary;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9), 0 0px 2px rgba(0, 0, 0, 0.9);
  a {
    color: $color-secondary;
  }
  a:hover {
    color: $color-tertiary;
  }
}

.nav-link:focus {
  color: $color-secondary;
}
.navbar-nav .nav-link.show {
  color: $color-tertiary;
}
.navbar-toggler {
  border: 1px solid white;
}
.navbar-toggler:focus {
  box-shadow: 0px 0px 15px 2px rgba(191, 148, 255);
}
</style>
