<template>
  <v-app>
    <div className="wrapper"></div>
    <v-main className="marginCom">
      <login-component/>
    </v-main>

  </v-app>

</template>

<script>
import LoginComponent from "../../components/LoginComponent";
export default {
  name: "login",
  layout:'Admin',
  components: {LoginComponent}
}
</script>

<style scoped>
.wrapper {
  /*background-image: url("../assets/daiphong.jpg");*/

  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.marginCom {
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  position: absolute;
  width: 100%;
}
</style>
