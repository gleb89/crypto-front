<template>
  <v-row>
    <v-col class="text-center">
      <img
        style="width: 15rem;"
        src="/work.jpg"
        alt="Контакты"
        class="mb-5"
      >
      <div class="text-center" style="color:black">
        <h2 class="mb-4">Для обмена вам необходимо выполнить несколько шагов:</h2>
        <hr>
<p><span><fa class="icon-answ" icon="bookmark"></fa></span> Заполните все поля формы обмена . Нажмите кнопку «Продолжить».</p>
<p><span><fa class="icon-answ" icon="bookmark"></fa></span> Оплатите заявку.  Для этого следует совершить перевод необходимой суммы, следуя инструкциям в форме оплаты.</p>
<p><span><fa class="icon-answ" icon="bookmark"></fa></span> Заполните все поля  формы данных. Нажмите кнопку «Оплатить».</p>
<p><span><fa class="icon-answ" icon="bookmark"></fa></span>Зачисление средств или криптовалют производиться по времени от 30 минут до 3-x часов.</p>

      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
    head:{
    title:'Вопросы и ответы'
  },
  meta:[
    { hid: 'description', name: 'description', content:'Обмен криптовалют' },
    { hid: 'homepage', name: 'keywords', content:'криптовалюты,bitcoin,ethereum' }
  ],
}
</script>

<style scoped>
.icon-answ{
  color: aquamarine;
}
</style>