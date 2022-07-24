<template>
  <v-app dark>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
      <!-- {{ userName }} -->
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // data() {
  //   return {
  //     userName: '',
  //   }
  // },
  // created() {
  //   this.userName = this.$store.getters['auth/getUserName']
  //   console.log(this.userName)
  // }
}
</script>
