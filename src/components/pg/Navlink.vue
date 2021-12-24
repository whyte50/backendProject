<template>
  <!-- Start: navbar -->
    <header class="navhead">
      <div>
        <router-link to="/login">Sign In</router-link>
        <button @click="this.$router.push('/register')">Sign Up</button>
      </div>
      <button v-if="isLoggedIn">Logout</button>
    </header><!-- End: navbar -->
</template>

<script>
export default {
    name: 'Navlink',
    data(){
      return {
        isLoggedIn : false
      }
    }
}
</script>

<style>

</style>