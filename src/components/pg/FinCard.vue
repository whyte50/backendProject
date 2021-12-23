<template>
    <div class="card-wrap">
        <div class="fin-card" :style="exit ? remove : null" type="button" @click="exit = !exit">
            <span class="card-type">VISA</span>
            <span class="card-number">1234&nbsp; 5678&nbsp; 9012&nbsp; 3456</span>
        </div>
        <div class="edit-card" v-if="exit">
        <i class="fa fa-minus"></i>
        </div>
    </div>
</template>

<script>
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

}
</script>

<style>

</style>