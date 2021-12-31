<template>
  <Alert v-if="this.$store.state.error !== null"/>
  <div>
    <div class="wrapper">
      <div class="box-container">
        <div>
          <h1 style="font-size: 80px">LOG</h1>
          <h1 style="font-size: 80px">IN</h1>
        </div>
        <div class="form-container">
          <form @submit.prevent="loginUser(user)">
            <div class="input-container">
              <input class="form-control" type="email" v-model="user.email" placeholder="Email">
            </div>
            <div class="input-container">
              <input class="form-control" type="password" v-model="user.password" placeholder="Password">
            </div>
            <!-- <p class="error">{{ this.$store.state.error }}</p> -->
            <div class="submit-btn">
              <button>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '../components/pg/Alert'

export default {
  name: 'Login',
  data(){
    return { 
      user : {
        email : '',
        password : ''
      }
    }
  },
  components: {
    Alert
  },
  methods: {
    ...mapActions(['loginUser'])
  }
}
</script>

<style>
  .wrapper{
    margin-top : 5rem
  }
</style>