<template>
    <div class="card-wrap">
        <div class="fin-card" :style="exit ? remove : null" type="button" @click="exit = !exit">
            <span class="card-type">{{ card.cardType }}</span>
            <span class="card-number">{{ card.cardNumber }}</span>
        </div>
        <div class="edit-card" v-if="exit" type="button" @click="deletecard(card.id)">
        <i class="fa fa-minus"></i>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'FinCard',
    data(){
        return {
            remove: {
                border: '1px solid red',
                color: 'red',
            },
            exit : false
        }
    },
    props: {
        card: Object
    },
    methods : {
         async deletecard (id) {
            await axios.get(`http://localhost:3000/payapi/cards/delete/${id}`)
            .then(response => {
                console.log(response)
            })
        }
      
    }
}
</script>

<style>

</style>