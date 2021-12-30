<template>
  <Modal modal="modal"/>
  <AccountAmount />
  <Cards :cards="this.$store.state.cardData" />
  <Fund />
</template>

<script>
import axios from "axios";
import store from '../store/index'

import AccountAmount from "./pg/AccountAmount.vue"
import Cards from "./Cards.vue"
import Modal from './pg/ApiSuccessModal'
import Fund from './pg/FundAccount'
export default {
  name: 'Fintech',
  data(){
    return {
      modal: true
    }
  },
  components: {
      AccountAmount,
      Cards,
      Modal,
      Fund
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