<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div style="color: black">
          <span>Speed-crypto</span>
          <hr />
          <h1>Покупка и продажа криптовалюты 24/7</h1>
        </div>
        <Exchange />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Exchange from "~/components/Exchange.vue";

export default {
  async fetch({ store }) {
    if (store.getters["crypto/crypto"].length === 0) {
      await store.dispatch("crypto/fetch");
    }
  },
  computed: {
    crypto_list() {
      return this.$store.getters["crypto/crypto"];
    },
  },
  data() {
    return {
      crypto_id: "",
      indallert: false,
    };
  },
  components: {
    Exchange,
  },
};
</script>

<style scoped>
span {
  font-size: 1rem;
  color: darkcyan;
}
h1 {
  color: black;
  font-size: 1rem;
}
</style>
