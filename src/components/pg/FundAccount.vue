<template>
    <div class="addcard-wrapper">
        <div>
            <div class="content-container">
                <h1>Share Money</h1>
                <p>Share money with other users through Email</p>
            </div>
        </div>
        <div class="form-container">
            <form @submit.prevent="this.$store.dispatch('sendMoney', details)">
                <div class="input-container">
                    <input class="form-control" type="email" v-model="details.email" placeholder="Email">
                </div>
                <div class="input-container">
                    <input class="form-control" type="number" v-model="details.amount"  placeholder="Amount in K">
                </div>
                <div class="submit-btn">
                    <button>Share</button>
                </div>
            </form>
        </div>
    </div>
<div class="footerr"><img src="../../assets/down.svg"></div>
</template>

<script>

export default {
    name : 'FundAccount',
    data(){
        return {
            details: {
                email : '',
                amount : ''
            }
        }
    }
}
</script>

<style>
</style>