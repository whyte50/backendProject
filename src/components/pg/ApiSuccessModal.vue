<template>
   <div class="modal-box">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Card Data</h4>
                    <button type="button" class="btn-close" @click="this.$store.commit('closeModal')"></button>
                </div>
                <div class="modal-body">
                    <div class="data">
                        <p>Bank</p>
                        <p>{{ this.$store.state.testData.bank }}</p>
                    </div>
                    <div class="data">
                        <p>Card Brand</p>
                        <p>{{ this.$store.state.testData.brand }}</p>
                    </div>
                    <div class="data">
                        <p>Card Type</p>
                        <p>{{ this.$store.state.testData.cardType }}</p>
                    </div>
                    <div class="data">
                        <p>Card Number</p>
                        <p>{{ this.$store.state.testData.cardNumber }}</p>
                    </div>
                    <div class="data">
                        <p>Country</p>
                        <p>{{ this.$store.state.testData.country }}</p>
                    </div>
                    <div class="data">
                        <p>Code</p>
                        <p>{{ this.$store.state.testData.code }}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button" @click="this.$store.commit('closeModal')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApiSuccessModal',
}
</script>

<style scoped>
    .modal-box .modal-dialog{
        width: 440px
    }
</style>