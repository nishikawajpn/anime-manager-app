<template>
  <v-footer :absolute="!fixed" app>
    <span class="footer__copyright">&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      fixed: false,
    }
  },
}
</script>

<style scoped lang="scss">
@import '/assets/css/mixin.scss';
.footer {
  &__copyright {
    @include rem(15);
    display: block;
    margin: 0 auto;
  }
}
</style>
