<template>
  <div class="content-area">
    <FlashMessage
      v-show="flashMessage.content"
      :flash-message="flashMessage"
    />
    <div class="search-form">
      <v-icon class="search-form__icon">mdi-magnify</v-icon>
      <input
        v-model="keyword"
        type="text"
        class="search-form__input"
        placeholder="タイトルで検索"
        @keypress.enter="searchAnime(keyword)"
      >
    </div>
    <template v-if="searchResults.length > 0">
      <h1 class="heading--large mt20">検索結果</h1>
      <AnimeList
        :anime-list="searchResults"
        :favorite-icon="true"
      />
    </template>
    <template v-else-if="noItemMessage"><p class="message-noitem">{{ noItemMessage }}</p></template>
  </div>
</template>

<script>
export default {
  props: {
    searchResults: {
      type: Array,
      default: () => [],
    },
    noItemMessage: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      keyword: '',
      // noItemMessage: ''
    }
  },
  computed: {
    flashMessage() {
      return this.$store.getters['auth/getFlashMessage']
    },
  },
  methods: {
    searchAnime(keyword) {
      this.$emit('search-anime', keyword)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
