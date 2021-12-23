<template>
    <div class="cards-wrapper">
        <div class="head-content">
            <h1 style="font-size: 80px">CARDS</h1>
            <p>Save cards using the paystack api.</p>
        </div>
    <div class="cards-container">
            <!-- Start: card componet -->
            <FinCard /><!-- End: card componet -->
            <FinCard />
            <div style="margin-top: 5%;">
                <p><i class="icon ion-android-add"></i>&nbsp; &nbsp;add card</p>
            </div>
        </div>
    </div>
</template>

<script>
import FinCard from "./pg/FinCard.vue"
export default {
    name: 'Cards',
    components : {
        FinCard,
    }
}
</script>

<style>

</style>