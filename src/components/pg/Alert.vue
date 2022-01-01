<template>
    <div class="route">
    <div class="dart">
        <p>{{ this.$store.state.error }}</p><i @click="this.$store.commit('clearError')" class="fa fa-close"></i>
    </div>
</div>
</template>

<script>

export default {
  name: 'Alert',
}
</script>

<style>

</style>