<template>
  <AccountAmount />
  <Cards />
</template>

<script>
import AccountAmount from "./pg/AccountAmount.vue"
import Cards from "./Cards.vue"
export default {
    name: 'Fintech',
    components: {
        AccountAmount,
        Cards,
    }
}
</script>

<style>

</style>