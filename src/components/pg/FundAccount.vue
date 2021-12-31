<template>
    <div class="addcard-wrapper" id="fund">
        <div>
            <div class="content-container">
                <h1>add card</h1>
                <p>fund your account using the&nbsp;paystack api</p>
            </div>
        </div>
        <div class="form-container">
            <form @submit.prevent="addNewCard(card)">
                <div class="input-container">
                    <input class="form-control" type="text" v-model="card.cardNumber" placeholder="Card Number">
                </div>
                <div class="input-container">
                    <input class="form-control" type="month" v-model="card.exp" placeholder="Exp" style="margin-right: 5%;">
                    <input class="form-control" type="password" placeholder="Amount" disabled>
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