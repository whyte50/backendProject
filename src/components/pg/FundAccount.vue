<template>
    <div class="fund-wrapper" id="fund">
        <div>
            <div class="content-container">
                <h1 style="font-size: 80px">FUND</h1>
                <p>fund your account using the&nbsp;paystack api</p>
            </div>
        </div>
        <div class="form-container glee">
            <form @submit.prevent="addNewCard(card)">
                <div class="input-container">
                    <input class="form-control" type="text" v-model="card.cardType" placeholder="Card Type">
                </div>
                <div class="input-container">
                    <input class="form-control" type="month" v-model="card.exp" placeholder="Exp" style="margin-right: 5%;">
                    <input class="form-control" type="text" v-model="card.pin" placeholder="Pin" style="margin-right: 5%;">
                    <input class="form-control" type="password" placeholder="Amount" disabled>
                </div>
                <div class="input-container">
                    <input class="form-control" type="text" v-model="card.cardNumber" placeholder="Card Number">
                </div>
                <p class="error">{{ this.$store.state.error }}</p>
                <div class="submit-btn">
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    <div class="footerr"><img src="../../assets/down.svg"></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name : 'FundAccount',
    data(){
        return {
            card : {
                cardType : '',
                cardNumber: '',
                exp: '',
                pin: '',
            }
        }
    },
    methods: {
        ...mapActions(['addNewCard'])
    }
}
</script>

<style>
</style>