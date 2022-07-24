<template>
  <v-alert
    dense
    outlined
    :type="flashMessage.type"
  >
    {{ flashMessage.content }}
  </v-alert>
</template>

<script>
export default {
  name: 'FlashMessage',
  props: {
    flashMessage: {
      type: Object,
      default: () => {},
      required: true,
    }
  },
}
</script>

<style>

</style>