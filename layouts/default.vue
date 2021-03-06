<template>
  <!-- App.vue -->
  <v-app class="body" style="background: white">
    <Navbar style="position: absolute; z-index: 1; top: 0; position: fixed" />
    <v-main
      style="
        padding: 0;
        margin-top: 4rem;
        margin-bottom: 6rem;
        min-height: 120vh;
      "
    >
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="mt-2" app>
      <v-row justify="center" align="center">
        <v-col justify="center" align="center" style="color: #009688">
          speed-crypto
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  component: {
    Navbar,
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.body {
  font-family: "Raleway", sans-serif;
}
.mobile-menu {
  position: absolute;
  z-index: 1;
  position: fixed;
  top: 20px;
  right: 20px;
}
@media (max-width: 500px) {
  .navigation-decstop {
    display: none;
  }
}
@media (min-width: 500px) {
  .mobile-menu {
    display: none;
  }
}
</style>