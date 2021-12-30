<template>
<div class="wrapper">
  <div class="box-container">
    <div>
      <h1 style="font-size: 80px">REGIS</h1>
      <h1 style="font-size: 80px">TER</h1>
      <p>create account and start transacting.</p>
    </div>
    <div class="form-container">
      <form @submit.prevent="registerUser(user)">
        <div class="input-container">
          <input class="form-control" v-model="user.username" type="text" placeholder="Username">
        </div>
        <div class="input-container">
          <input class="form-control" v-model="user.email" type="email" placeholder="Email" style="margin-right: 5%;">
          <input class="form-control" v-model="user.password" type="password" placeholder="Password">
        </div>
        <p class="error">{{ this.$store.state.error }}</p>
        <div class="submit-btn">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Register',
  data(){
    return{ 
      user : {
        username : '',
        password : '',
        email : ''
      },
    }
  },
  methods:{
    ...mapActions(['registerUser'])
  }

}
</script>

<style>

</style>