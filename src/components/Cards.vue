<template>
    <div class="cards-wrapper">
        <div class="head-content">
            <h1 style="font-size: 80px">CARDS</h1>
            <p>Save cards using the paystack api.</p>
        </div>
        <div class="cards-container">
            <div v-for="card in cards" :key="card.id">
                <FinCard :card="card"/>
            </div>
            <div style="margin-top: 5%;" :style="exit ? remove : null" type="button" @click="exit = !exit">
                <p @click="scroll('card')"><i class="icon ion-android-add"></i>&nbsp; &nbsp;add card</p>
            </div>
        </div>
    </div>
</template>

<script>
import FinCard from "./pg/FinCard.vue"
export default {
    name: 'Cards',
    data(){
        return {
            remove: {
                'font-weight': '700',
            },
            exit : false
        }
    },
    components : {
        FinCard,
    },
    props : {
        cards: Array
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