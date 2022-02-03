<template>
    <div class="card-wrap">
        <div class="fin-card" :style="exit ? remove : null" type="button" @click="exit = !exit">
            <span class="card-type">{{ card.brand }}</span>
            <span class="card-number">{{ card.cardNumber }}</span>
        </div>
        <div class="edit-card" v-show="exit" type="button" @click="deletecard(card.id)">
        <i class="fa fa-minus"></i>
        </div>
        <div class="edit-card" v-show="exit" @click="getcardbyid(card._id)" type="button"><i class="fa fa-eye"></i></div>
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
            },
            exit : false
        }
    },
    props: {
        card: Object
    },
    methods : {
         async deletecard (id) {
            await axios.get(`https://backend--backendproject.herokuapp.com/payapi/cards/delete/${id}`)
            .then(response => {
                console.log(response)
                this.$store.state.error = "Card deleted successfully"
            })
        },
        async getcardbyid (id) {
            await axios.get(`https://backend--backendproject.herokuapp.com/payapi/card/${id}`)
            .then((response) => {
                this.$store.commit('newCard', response.data[0])
                this.$store.commit('showModal')
            })
        }
      
    }
}
</script>

<style>

</style>