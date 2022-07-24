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
    <h1 class="heading--large mt20">マイリスト</h1>
    <template v-if="favoriteAnimes.length > 0">
      <AnimeList
        :anime-list="favoriteAnimes"
        :favorite-icon="false"
      />
    </template>
    <template v-else><p class="message-noitem">お気に入り登録したアニメはありません。</p></template>
  </div>
</template>

<script>
export default {
  props: {
    favoriteAnimes: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    flashMessage() {
      return this.$store.getters['auth/getFlashMessage']
    },
  },
  created() {
    sessionStorage.setItem('searchResults', '')
    sessionStorage.removeItem('searchResults')
  },
  destroyed() {
    this.$store.dispatch('auth/resetFlashMessage')
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
