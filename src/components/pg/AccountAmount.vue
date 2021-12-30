<template>
  <div class="account-wrapper">
        <div class="account" style="margin-top: 0">
            <div class="amount-dispaly">
                <span>₦{{ this.$store.state.amount }}</span>
            </div>
            <div class="content-container">
                <h1 style="font-size: 80px">ACCO</h1>
                <h1 style="font-size: 80px">UNT</h1>
                <p>See the amount in ₦ credited into you account</p>
                <div :style="exit ? remove : null" type="button" @click="exit = !exit">
                    <p type="button" @click="scroll('fund')"><i class="icon ion-android-add"></i>&nbsp; &nbsp;add fund</p>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AccountAmount',
    data(){
        return {
            remove: {
                'font-weight': '700',
            },
            exit : false
        }
    },
    methods: {
        scroll(id){
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style>

</style>