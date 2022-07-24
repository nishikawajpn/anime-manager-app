<template>
  <div>
    <NuxtChild
      :user-id="userId"
      :favorite-animes="favoriteAnimes"
      :search-results="searchResults"
      :no-item-message="noItemMessage"
      @search-anime="searchAnime"
      @update-search-results="updateSearchResults"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchResults: [],
      noItemMessage: '',
    }
  },
  computed: {
    favoriteAnimes() {
      return this.$store.getters['anime/getFavoriteAnimes']
    },
    userId() {
      return this.$store.getters['auth/getUserId']
    }
  },
  methods: {
    async searchAnime(e) {

      const params = { q: e }
      const baseUrl = 'https://api.jikan.moe/v4/anime?'
      const urlSearchParam = new URLSearchParams(params).toString()

      const response = await fetch(baseUrl + urlSearchParam)
        .then(response => response.json())

      if (response.data.length <= 0) {
        this.noItemMessage = '検索ワードに一致する結果が見つかりません。'
      }

      this.searchResults = []
      for (const anime of response.data) {

        const isRegistered = !!this.favoriteAnimes.find(v => v.title === anime.title_japanese)
        
        this.searchResults.push({
          title: anime.title_japanese,
          image: anime.images.jpg.image_url,
          favorite: isRegistered,
        })
      }
      sessionStorage.setItem('searchResults', '')
      sessionStorage.removeItem('searchResults')
      sessionStorage.setItem('searchResults', JSON.stringify(this.searchResults))
      
      this.$router.push('/anime/search')
    },
    updateSearchResults() {
      this.searchResults = JSON.parse(sessionStorage.getItem('searchResults'))
    }
  }
}
</script>

<style>

</style>