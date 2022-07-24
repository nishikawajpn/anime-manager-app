<template>
  <div class="content-area">
    <div class="edit-form">
      <h2 class="edit-form__title">{{ targetAnime.title }}</h2>
      <div class="edit-form__img" :style="{ backgroundImage: 'url(' + targetAnime.image + ')' }"></div>
      <div class="edit-form__favorite-button">
        <v-btn
          :color="favoriteButton.color"
          @click="favorite"
        >
          {{ favoriteButton.text }}
        </v-btn>
      </div>
      <div v-show="isRegistered" class="edit-form__evaluation">
        <v-rating
          v-model="point"
          background-color="orange lighten-3"
          color="orange"
          half-increments
          hover
          large
        ></v-rating>
        <v-textarea
          v-model="memo"
          outlined
          label="メモ"
          auto-grow
          rows="3"
          class="edit-form__memo"
        ></v-textarea>
        <v-btn
          color="success"
          class="edit-form__save-button"
          @click="save"
        >
          保存
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    userId: {
      type: String,
      required: true
    },
    favoriteAnimes: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      targetIndex: '',
      targetAnime: null,
      memo: '',
      point: 0,
    }
  },
  computed: {
    isRegistered() {
      let response = false
      if (this.favoriteAnimes.length > 0) {
        this.favoriteAnimes.forEach(anime => {
          if (anime.title === this.targetAnime.title) {

            response = true
          }
        })
      }
      return response
    },
    favoriteButton() {
      if (this.isRegistered) {
        return {
          color: 'error',
          text: 'お気に入り解除',
        }
      } else {
        return {
          color: 'success',
          text: 'お気に入り登録',
        }
      }
    },
    targetAnimeId() {
      return this.favoriteAnimes.find(v => v.title === this.targetAnime.title).id
    }
  },
  created() {
    this.targetIndex = this.$route.params.id

    const targetAnimeList = JSON.parse(sessionStorage.getItem('searchResults')) || this.favoriteAnimes
    this.targetAnime = targetAnimeList[this.targetIndex]

    if (this.isRegistered) {
      const savedData = this.favoriteAnimes.find(v => v.title === this.targetAnime.title)
      this.memo = savedData.memo
      this.point = savedData.point
    }

  },
  methods: {
    favorite() {

      if (this.isRegistered) {
        if (confirm('本当にお気に入りを解除しますか？')) {
          const data = {
            uid: this.userId,
            animeId: this.targetAnimeId,
          }
          this.$store.dispatch('anime/removeFavoriteAnimes', data)
        }

      } else {
        const data = { ...this.targetAnime }
        data.uid = this.userId
        this.$store.dispatch('anime/addFavoriteAnimes', data)
      }

      this.$store.dispatch('anime/setFavoriteAnimes', this.userId)
      this.updateSearchResults()
    },
    updateSearchResults() {
      const searchResults = JSON.parse(sessionStorage.getItem('searchResults'))
      searchResults[this.targetIndex].favorite = !searchResults[this.targetIndex].favorite
      sessionStorage.setItem('searchResults', JSON.stringify(searchResults))

      this.$emit('update-search-results')
    },
    save() {
      const data = {
        uid: this.userId,
        animeId: this.targetAnimeId,
        point: this.point,
        memo: this.memo,
      }
      this.$store.dispatch('anime/saveReview', data)
      this.$store.dispatch('anime/setFavoriteAnimes', this.userId)

      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="scss">
@import '/assets/css/media.scss';
@import '/assets/css/mixin.scss';

.edit-form {
  &__title {
    color: darken($color-font, 20%);
    line-height: 1.2;
    font-weight: normal;
    @include rem(25);
  }

  &__img {
    width: 80%;
    height: 0;
    padding-bottom: 100%;
    margin: 15px auto 0;
    box-sizing: border-box;
    border-radius: 10px;
    background: {
      size: 100% auto;
      position: center;
      color: #2c2c2c;
    };
  }

  &__favorite-button {
    margin-top: 15px;
    text-align: center;
  }

  &__evaluation {
    margin-top: 10px;

  }

  &__memo {
    margin: 5px 0 -30px;
  }

  &__save-button {
    margin: 15px auto 0;
    display: block;
  }
}

@include media(tb) {
  .edit-form {
    padding-left: 230px;
    min-height: 280px;
    position: relative;

    &__img {
      width: 200px;
      padding-bottom: 280px;
      margin: 0;
      position: absolute;
      top: 0;
      left: 0;
    }

    &__favorite-button {
      text-align: left;
    }

    &__save-button {
      margin-right: 0;
    }
  }
}

@include media(pc) {

}
</style>
