<template>
  <Modal modal="true"/>
  <AccountAmount />
  <Cards />
  <Fund />
</template>

<script>
import AccountAmount from "./pg/AccountAmount.vue"
import Cards from "./Cards.vue"
import Modal from './pg/ApiSuccessModal'
import Fund from './pg/FundAccount'
export default {
  name: 'Fintech',
  components: {
      AccountAmount,
      Cards,
      Modal,
      Fund
  }
}
</script>

<style>

</style>