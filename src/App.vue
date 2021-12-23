<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  
  <Navlink />
  <router-view/>
</template>

<script>
import Navlink from './components/pg/Navlink.vue'

export default {
  mounted(){
    let externalScript = document.createElement('script')

    externalScript.setAttribute('src', './assets/js/bootstrap.min.js')

    document.head.appendChild(externalScript)
  },
  components: {
    Navlink,
  }
}

</script>

<style>
@import './assets/fonts/font-awesome.min.css';
@import './assets/fonts/ionicons.min.css';

</style>