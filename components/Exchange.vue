<template>
<v-container class="mt-5">
  
  <v-card v-if="!datapay" class="card-exc mx-auto" color="#26c6da" dark max-width="700">
    
    {{ onPrice }}
    <v-card-title>
      <span class="title font-weight-light"
        >{{ text_operacion }}<br />
        криптовалюты </span
        
      >
    </v-card-title>
    <v-form v-if="!sell" ref="form" v-model="valid" lazy-validation>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
            :disabled='isDisabled'
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
        <p v-if="crypto_id">курс обменна: 1 {{crypto_id}} = {{cyrs_crypto}} rub</p>
      </div>
      <v-container fluid>
        <v-row align="center">
          <v-col cols="7">
            <v-text-field
              :disabled='isDisabled'
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
              v-model="crypto_id"
              label="Валюта"
              hide-details
              single-line
              :items="crypto_list"
            >

            </v-select>
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
              :disabled='isDisabled'
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
              v-model="crypto_id"
              label="Валюта"
              hide-details
              single-line
              :items="crypto_list"
            >

            </v-select>
          </v-col>
        </v-row>
      </v-container>
      <div class="box-exc">
        <p style="text-align: center">
          <fa @click="reverseExc" class="icon-exc" icon="exchange-alt"></fa>
        </p>
        <br />
        <p v-if="crypto_id">курс обменна: 1 {{crypto_id}} = {{cyrs_crypto}} rub</p>
      </div>

      <v-container fluid>
        <v-row align="center">
          <v-col cols="12">
            <v-text-field
              :disabled='isDisabled'
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
  async fetch({ store }) {
    if (store.getters["crypto/crypto"].length === 0) {
      await store.dispatch("crypto/fetch");
    }
  },

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
      crypto_id:'',
      list_crypto:[],
      cyrs_bitcoin:0,
      cyrs_ethereum:0,
      cyrs_crypto:''
      
    };
  },
  computed: {
    isDisabled() {
    if(this.crypto_id){
      if (this.text_operacion === "Покупка") {
        this.text_operacion = "Продажа";
        (this.operacion_crypto = "Отдаю "),
          (this.operacion_rub = "Получаю (rub)");
      } else {
        this.text_operacion = "Покупка";
        (this.operacion_crypto = "Получаю "),
          (this.operacion_rub = "Отдаю (rub)");
      }
      return false
    }
    else{
      this.operacion_rub = 'Выберите валюту'
      this.operacion_crypto = 'Выберите валюту'
      return true
    }
     
    },
     crypto_list(){
      let list = []
      for(let i of this.$store.getters["crypto/crypto"]){
        list.push(i.coin)
        if(i.coin === 'Bitcoin'){
          this.cyrs_bitcoin = i.price
        }
        if(i.coin === 'Ethereum'){      
        this.cyrs_ethereum = i.price
        }
      }
      if(this.crypto_id){
        
        if(this.crypto_id === 'Bitcoin'){
           this.cyrs_crypto = String(this.cyrs_bitcoin) 
        }
        if(this.crypto_id === 'Ethereum'){      
         this.cyrs_crypto = String(this.cyrs_ethereum) 
        }
      }
      this.list_crypto = list
      return this.list_crypto
      
    },
    onPrice() {
      if (!this.crypto_rub) {
        if (this.result_rub > 0) {
          this.result_crypto = 0;
          this.result_crypto =  this.result_rub/this.cyrs_crypto; 
        }
        if (this.result_rub === "") {
          this.result_crypto = 0;
        }
      }
      if (this.crypto_rub && this.result_crypto > 0) {
        this.result_rub = 0;
        this.result_rub = this.cyrs_crypto*this.result_crypto 
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
