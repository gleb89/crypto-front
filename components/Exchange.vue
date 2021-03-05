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
      <v-btn v-if="result_rub >0" @click="pasteData" color="success" class="mr-4">
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
      <v-btn v-if="result_rub >0" @click="pasteData" color="success" class="mr-4">
        Продолжить
      </v-btn>
    </v-form>
  </v-card>
  <v-card  v-if="datapay" class="card-exc mx-auto" color="#26c6da" dark max-width="700">
    <div v-if="allert" class="box-alert">
    <v-alert
    style="text-align: initial;"
      class="alertcucces"
      type="success"
      >
      <p>Заявка подана успешно!</p>
      <p>Операция будет выполнена от 15 минут до 3 часов!</p>
      <p>Оповещение будет отправлено на указанную почту</p>
      </v-alert>
      </div>
    <v-btn @click="datapay = !datapay">
        назад
    </v-btn>
      <v-form
    ref="formdata"
    v-model="valid"
    lazy-validation
  >
  <div class="mt-5" v-if="text_operacion === 'Продажа'">
    <p v-if="crypto_id === 'Ethereum'">Отправте {{result_crypto}} {{crypto_id}} на адресс
      <br>
       <v-text-field v-model="adreseth" ref="textToCopy"></v-text-field>
          <v-btn @click="copyText">copy</v-btn>
       </p>
    <p v-if="crypto_id === 'Bitcoin'">Отправте {{result_crypto}} {{crypto_id}} на адресс
      <br>
         <v-text-field v-model="adresbtc" ref="textToCopy"></v-text-field>
          <v-btn @click="copyText">copy</v-btn>
       </p>
  </div>
    <div class="mt-5" v-if="text_operacion === 'Покупка'">
    <p >Отправте {{result_rub}} рублей по следующим реквизитам:
      <br>
      Номер карты:5469 1100 1336 1464
      <br>
      Фио: Туманов Глеб Андреевич
    </p>
    <br>
  </div>
      <v-text-field
      v-if="crypto_id === 'Bitcoin' && text_operacion === 'Покупка'"
      v-model="bitcoinadr"
      :rules="bitcoinlRules"
      label="Введите ваш адресс Bitcoin"
      required
    ></v-text-field>
      <v-text-field
      v-if="crypto_id === 'Ethereum' && text_operacion === 'Покупка'"
      v-model="ethadr" 
      :rules="ethereumlRules"
      label="Введите ваш адресс Ethereum"
      required
    ></v-text-field>
      <v-text-field
      v-if="text_operacion === 'Продажа'"
      v-model="card" 
      :rules="cardlRules" 
      label="Введите ваш номер карты"
      required
    ></v-text-field>
      <v-text-field
      v-if="text_operacion === 'Продажа'"
      v-model="fio" 
      :rules="fiolRules" 
      label="Введите ФИО держателя карты"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
      <span v-if="text_operacion === 'Продажа' ">Вы продаете {{result_crypto}} {{crypto_id}} за {{result_rub}} рублей</span>
      <span v-if="text_operacion === 'Покупка' ">Вы покупаете {{result_crypto}} {{crypto_id}} за {{result_rub}} рублей</span>
      <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'Подтвердите согласие!']"
      label="Я согласен(а)"
      required
    ></v-checkbox>
    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      я оплатил
    </v-btn>
  </v-form>
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
      valid: true, 
      ethereumlRules:[
        v => !!v || 'Адрес обязателен',   
      ] ,
      fiolRules:[
        v => !!v || 'ФИО обязательно',
      ],
      bitcoinlRules:[
        v => !!v || 'Адрес обязателен',
      ],
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\..+/.test(v) || 'E-mail неверно введен',
      ],
      cardlRules :[
         v => !!v || 'Данные карты обязательны',
      ],
      datapay:false,
      sell: false,
      allert:false,
      result_crypto: 0,
      result_rub: 0,
      valid: "",
      fio:'',
      bitcoinadr:'',
      ethadr:'',
      card:'',
      adreseth:'0x8E9fDeEbfb3cF8b9BeA65822AF50953Abe021c93',
      adresbtc:'1DcztHZTirLNN3fMu2s3wJBmq2QchXeLtR',
      checkbox: false,
      text_operacion: "Покупка",
      operacion_crypto: "Получаю",
      operacion_rub: "Отдаю (rub)",
      crypto_rub: false,
      crypto_id:'',
      list_crypto:[],
      cyrs_bitcoin:0,
      email:'',
      cyrs_ethereum:0,
      cyrs_crypto:''

    };
  },
  computed: {
    isDisabled() {
    if(this.crypto_id){
      if(this.text_operacion === "Продажа"){
        this.operacion_crypto = "Отдаю "
        this.operacion_rub = "Получаю (rub)"
      }
      else{
          this.operacion_crypto = "Получаю "
          this.operacion_rub = "Отдаю(rub)"
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
    copyText () {
          let textToCopy = this.$refs.textToCopy.$el.querySelector('input')
          textToCopy.select()
          document.execCommand("copy");
      },
    validate () {
      if(this.$refs.formdata.validate()){
        this.sendData()
      }
      else{
        console.log('novalid');
      }
        
    },
    pasteData(){
        this.datapay = true
              },
    sendData(){
      let headers = {
            'Content-Type': 'application/json',
        };
      let data
        if(this.text_operacion === 'Продажа'){
              data = {
                "numbercard": this.card,
                'fio':this.fio,
                'crypto':this.crypto_id,
                'operation':this.text_operacion,
                'count_rub':this.result_rub,
                'count_crypto':this.result_crypto,
                'email':this.email
            };
        }
        if(this.text_operacion === 'Покупка'){
          let adr
          if(this.crypto_id === 'Bitcoin'){
              adr = this.bitcoinadr
              }
          if(this.crypto_id === 'Ethereum'){
            adr = this.ethadr
          }
              data = {
                "numberadres": adr,
                'operation':this.text_operacion,
                'crypto':this.crypto_id,
                'count_rub':this.result_rub,
                'count_crypto':this.result_crypto,
                'email':this.email
            };
        }
   
        console.log(data);
        this.$axios.$post(`http://127.0.0.1:8000/crypto`,data,{
                                                        headers: headers
        }
        )
        .then(responce => {
          console.log(responce );
          this.allert = true
          setTimeout(() => {
            this.crypto_id = ''
            this.result_crypto = 0
            this.crypto_rub = 0
            this.datapay = !this.datapay
            this.allert = false
            }, 10000);
            
      
        },
        error => {
          console.log('error');
      })
    },
    reverseExc() {
      if(this.text_operacion === "Покупка"){
        this.text_operacion = "Продажа"

      }
      else{
        this.text_operacion = "Покупка"
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
.box-alert{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 10rem;
  padding: 5px;
  left: 0;
  right: 0;
  text-align: center; 
  z-index: 1;
}
</style>
