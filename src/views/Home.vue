<template>
  <div class="bg-helper">
    <img class="bg" src="../assets/bg.svg">
  </div>
  <Fintech />
</template>

<script>
// @ is an alias to /src
import Fintech from '../components/Fintech'

export default {
  name: 'Home',
  components : {
    Fintech
  }
}
</script>