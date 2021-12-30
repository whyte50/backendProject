<template>
  <!-- Start: navbar -->
    <header class="navhead">
      <div v-if="this.$store.state.isLoggedIn === false">
        <router-link to="/login">Sign In</router-link>
        <button @click="this.$router.push('/register')">Sign Up</button>
      </div>
      <div class="logout-wrapper" v-if="this.$store.state.isLoggedIn === true">
        <p style="margin-right: 2rem; font-weight: 700">Welcome</p>
        <p>{{ this.$store.state.userDetails.username }}</p>
        <button @click="logoutUser">Logout</button>
      </div>
    </header><!-- End: navbar -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navlink',
  data(){
    return {
      logout: false,
    }
  },
  methods: {
    ...mapActions(['logoutUser'])
  }
}
</script>

<style>
  .logout-wrapper{
    display: flex;
    align-items: center
  }

  .logout-wrapper p {
    margin: 0
  }
</style>