<template>
<v-container class="mt-5">
  <v-card v-if="!datapay" class="card-exc mx-auto" color="#26c6da" dark max-width="700">
    {{ onPrice }}
    <v-card-title>
      <span class="title font-weight-light"
        >{{ text_operacion }}<br />
        криптовалюты</span
      >
    </v-card-title>
    <v-form v-if="!sell" ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              @click="crypto_rub = false"
              v-model="result_rub"
              :label="operacion_rub"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <div class="box-exc">
        <p style="text-align: center">
          <fa @click="reverseExc" class="icon-exc" icon="exchange-alt"></fa>
        </p>
        <br />
        <p>курс обменна = 1:1.33</p>
      </div>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="7">
            <v-text-field
              @click="crypto_rub = true"
              v-model="result_crypto"
              :label="operacion_crypto"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-select
              style="margin-bottom: 1.5rem"
              menu-props="auto"
              label="Валюта"
              hide-details
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-btn @click="pasteData" color="success" class="mr-4">
        Продолжить
      </v-btn>
    </v-form>

    <v-form v-if="sell" ref="forms" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="7">
            <v-text-field
              @click="crypto_rub = true"
              v-model="result_crypto"
              :label="operacion_crypto"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-select
              style="margin-bottom: 1.5rem"
              menu-props="auto"
              label="Валюта"
              hide-details
              single-line
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <div class="box-exc">
        <p style="text-align: center">
          <fa @click="reverseExc" class="icon-exc" icon="exchange-alt"></fa>
        </p>
        <br />
        <p>курс обменна = 1:1.33</p>
      </div>

      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              @click="crypto_rub = false"
              v-model="result_rub"
              :label="operacion_rub"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <v-btn @click="pasteData" color="success" class="mr-4">
        Продолжить
      </v-btn>
    </v-form>
  </v-card>
  <v-card v-if="datapay" class="card-exc mx-auto" color="#26c6da" dark max-width="700"> 
    <v-btn @click="datapay = !datapay">
      назад
    </v-btn>
    
</v-card>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      datapay:false,
      sell: false,
      result_crypto: 0,
      result_rub: 0,
      valid: "",
      text_operacion: "Покупка",
      operacion_crypto: "Получаю",
      operacion_rub: "Отдаю (rub)",
      crypto_rub: false,
    };
  },
  computed: {
    onPrice() {
      if (!this.crypto_rub) {
        if (this.result_rub > 0) {
          this.result_crypto = 0;
          this.result_crypto = this.result_rub * 2;
        }
        if (this.result_rub === "") {
          this.result_crypto = 0;
        }
      }
      if (this.crypto_rub && this.result_crypto > 0) {
        this.result_rub = 0;
        this.result_rub = this.result_crypto * 3;
      }
      if (this.crypto_rub && this.result_crypto === "") {
        this.result_rub = 0;
      }
    },
  },
  methods: {
    pasteData(){
        this.datapay = true
              },
    reverseExc() {
      if (this.text_operacion === "Покупка") {
        this.text_operacion = "Продажа";
        (this.operacion_crypto = "Отдаю "),
          (this.operacion_rub = "Получаю (rub)");
      } else {
        this.text_operacion = "Покупка";
        (this.operacion_crypto = "Получаю "),
          (this.operacion_rub = "Отдаю (rub)");
      }
      this.sell = !this.sell;
      this.result_crypto = 0;
      this.result_rub = 0;
    },
  },
};
</script>


<style scoped>
.card-exc {
  padding: 2rem;
}

@media (max-width: 500px) {
  .card-exc {
    margin-top: 1rem;
    padding: 5px;
  }
}
.box-exc {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.icon-exc {
  font-size: 20px;
  cursor: pointer;
}
.icon-exc:hover {
  color: #009688;
}
</style>


