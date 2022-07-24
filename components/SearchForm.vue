<template>
  <div class="search-form">
    <v-icon class="search-form__icon">mdi-magnify</v-icon>
    <input
      v-model="keyword"
      type="text"
      class="search-form__input"
      placeholder="アニメのタイトルで検索"
      @keypress.enter="searchAnime(keyword)"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .search-form {
    border: 1px solid #dfe1e5;
    display: flex;
    align-items: center;
    height: 44px;
    border-radius: 22px;
    padding-top: 2px;

    &__icon {
      margin-left: 15px;
    }

    &__input {
      width: 100%;
      outline: none;
      margin-left: 10px;
    }
  }
</style>