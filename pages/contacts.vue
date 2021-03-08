<template>
  <v-row>
    <v-col class="text-center">
      <img
        style="width: 15rem;"
        src="/contact.jpg"
        alt="Контакты"
        class="mb-5"
      >
      <p style="color:black">
        <a href="tg://resolve?domain=hleb89" target="_blank">Telegram
        </a>

      </p>
      <p style="color:black">
        <a href="https://wa.me/79991845015/" target="_blank">Whatsapp</a>
      </p>
        <p style="color:black">
        <a href="mailto:vlad@htmlbook.ru">Почта</a>
      </p>

    </v-col>
  </v-row>
</template>

<script>
export default {
    head:{
    title:'Контакты'
  },
  meta:[
    { hid: 'description', name: 'description', content:'Обмен криптовалют' },
    { hid: 'homepage', name: 'keywords', content:'криптовалюты,bitcoin,ethereum' }
  ],
}
</script>

<style scoped>
.icon-telegram{
  color: blue;
}
</style>
