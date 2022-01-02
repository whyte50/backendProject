<template>
  <Alert v-if="this.$store.state.error !== null"/>
  <Modal v-if="this.$store.state.modal"/>
  <AccountAmount />
  <Cards :cards="this.$store.state.cardData" />
  <Save id="card"/>
  <VA />
  <Fund />
</template>

<script>
import axios from "axios";
import store from '../store/index'
import jwt from 'jsonwebtoken'

import AccountAmount from "./pg/AccountAmount.vue"
import Alert from './pg/Alert'
import VA from './pg/VA'
import Cards from "./Cards.vue"
import Modal from './pg/ApiSuccessModal'
import Save from './pg/AddCard'
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
      Save,
      Alert,
      VA,
      Fund
  },
  async created(){

    const token = localStorage.getItem('token')
    if (token) {
      const auth = jwt.verify(token, store.state.userDetails.key)
      if (auth) {
        await axios.get(`https://backend--backendproject.herokuapp.com/payapi/cards/${store.state.userDetails.id}`)
        .then((response) => {
          store.commit('addCard', response.data)
        })
      }
    }
    
    
  }
}
</script>

<style>

</style>