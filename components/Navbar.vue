<template>
  <v-bottom-navigation color="teal" grow class="d-flex">
    <p class="box-btn d-inline pa-2" @click="onHome">
      <fa title="Главная" class="icons icon-home" icon="home"></fa>
      <br />
      <span>Главная</span>
    </p>
    <p class="box-btn d-inline pa-2" @click="onAnswer">
      <fa
        title="Как работает"
        class="icons icon-home"
        icon="network-wired"
      ></fa>
      <br />
      <span>Как работает</span>
    </p>
    <p class="box-btn d-inline pa-2" @click="onOtzivi">
      <fa title="Отзывы" class="icons icon-home" icon="comment-alt"></fa>

      <br />
      <span>Отзывы</span>
    </p>
    <p class="box-btn d-inline pa-2" @click="onContacts">
      <fa title="Контакты" class="icons icon-home" icon="id-card-alt"></fa>
      <br />
      <span>Контакты</span>
    </p>
  </v-bottom-navigation>
</template>


<script>
export default {
  component: {},

  data() {
    return {};
  },
  methods: {
    onHome() {
      this.$router.push("/");
    },
    onAnswer() {
      this.$router.push("/answer");
    },
    onOtzivi() {
      this.$router.push("/otzivu");
    },
    onContacts() {
      this.$router.push("/contacts");
    },
  },
};
</script>

<style scoped>
.icons {
  font-size: 1rem;
}
span {
  font-size: 15px;
}
.box-btn {
  padding: 1px;
  margin: 1px;
  text-align: center;
}
.box-btn:hover {
  opacity: 0.7;
}
.box-btn {
  cursor: pointer;
}
@media (max-width: 500px) {
  span {
    font-size: 9px;
  }
}
@media (max-width: 500px) {
  .icons {
    font-size: 12px;
  }
}

@media (min-width: 500px) {
  .box-btn {
    margin-right: 3rem;
  }
}
</style>