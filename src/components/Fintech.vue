<template>
  <Alert v-if="this.$store.state.error !== null"/>
  <Modal v-if="this.$store.state.modal"/>
  <AccountAmount />
  <Cards :cards="this.$store.state.cardData" />
  <Fund id="card"/>
  <VA />
</template>

<script>
import axios from "axios";
import store from '../store/index'

import AccountAmount from "./pg/AccountAmount.vue"
import Alert from './pg/Alert'
import VA from './pg/VA'
import Cards from "./Cards.vue"
import Modal from './pg/ApiSuccessModal'
import Fund from './pg/FundAccount'
export default {
  name: 'Fintech',
  data(){
    return {

    }
  },
  components: {
      AccountAmount,
      Cards,
      Modal,
      Fund,
      Alert,
      VA
  },
  async created(){

    await axios({
      url: 'http://localhost:3000/api/auth',
      withCredentials: true
    })
    .then(async () => {
      await axios.get(`http://localhost:3000/payapi/cards/${store.state.userDetails.id}`)
      .then((response) => {
        store.commit('addCard', response.data)
      })
    })
    
  }
}
</script>

<style>

</style>