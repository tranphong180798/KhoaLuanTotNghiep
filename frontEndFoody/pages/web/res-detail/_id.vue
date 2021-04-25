<template>
  <div >
    <h1>phong</h1>

  </div>
</template>

<script>
export default {
  computed:{
    products () {

    }
  },
mounted() {
  this.$store.dispatch("getRestaurantDetail",this.$route.params.id);
}
}
</script>

<style scoped>

</style>
