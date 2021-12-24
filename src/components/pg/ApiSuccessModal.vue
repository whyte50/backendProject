<template>
   <div v-if="modal" class="modal-box">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Card Data</h4>
                    <button type="button" class="btn-close" @click="modal = !modal"></button>
                </div>
                <div class="modal-body">
                    <div class="data">
                        <p>Name</p>
                        <p>Williams Eze</p>
                    </div>
                    <div class="data">
                        <p>Bank Name</p>
                        <p>United Bank for Africa</p>
                    </div>
                    <div class="data">
                        <p>Amount</p>
                        <p>₦25, 000</p>
                    </div>
                    <div class="data">
                        <p>Name</p>
                        <p>Paragraph</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button" @click="modal = !modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApiSuccessModal',
    props: {
        modal : {
            type : Boolean,
            default : false
        }
    }
}
</script>

<style>
    .modal-box {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
</style>