<script>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <TheHeader></TheHeader>
  <main
    class="overflow-auto vh-100 bg-home-page text-center text-lg-start align-items-center justify-content-center"
  >
    <router-view></router-view>
  </main>
  <TheFooter></TheFooter>
</template>

<style lang="scss">
@use "./scss/partials/variables" as *;

.bg-home-page {
  background-color: #0e0e10;
  color: $color-secondary;
}
</style>
