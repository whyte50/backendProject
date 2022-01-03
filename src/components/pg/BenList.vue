<template>
  <div class="modal-box fade show" v-if="this.$store.state.benList">
        <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Beneficiary Details</h4>
                    <button type="button" class="btn-close" @click="this.$store.commit('closeBen')"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 bg-white rounded">
                                <div class="table-responsive">
                                    <table class="table table-fixed">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="col-3">#</th>
                                                <th scope="col" class="col-3">Name</th>
                                                <th scope="col" class="col-3">Number</th>
                                                <th scope="col" class="col-3">bankID</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="ben in benData" :key="ben.id">
                                            <tr>
                                                <th scope="row" class="col-3"></th>
                                                <td class="col-3">{{ ben.accountName }}</td>
                                                <td class="col-3">{{ ben.accountNumber }}</td>
                                                <td class="col-3">{{ ben.bankID }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-light" type="button" @click="this.$store.commit('closeBen')">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import store from "../../store/index"
export default {
    name: 'BenList',
    data() {
        return {
            benData : []
        }
    },
    async created() {
        const response = await axios.get(`https://backend--backendproject.herokuapp.com/payapi/account/ben_list/${store.state.userDetails.id}`)
        console.log(response)
        this.benData = response.data
    }

}
</script>

<style scoped>
    .modal-box .modal-dialog{
        width: 770px
    }
</style>