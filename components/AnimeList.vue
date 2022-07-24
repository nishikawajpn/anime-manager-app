<template>
  <ul class="anime-list">
    <li
      v-for="(anime, index) in animeList"
      :key="index"
      class="anime-list__item"
    >
      <router-link :to="{ name: 'anime-edit-id', params: { id: index } }" class="anime-list__link">
        <div
          class="anime-list__img"
          :style="{ backgroundImage: 'url(' + anime.image + ')' }"
        ></div>
        <div class="anime-list__layer">
          <p class="anime-list__title">{{ anime.title }}</p>
        </div>
        <v-btn
          v-if="favoriteIcon"
          icon
          :disabled="!anime.favorite"
          color="pink"
          class="anime-list__heart"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AnimeList',
  props: {
    animeList: {
      type: Array,
      default: () => [],
    },
    favoriteIcon: {
      type: Boolean,
    },
  },
}
</script>

<style scoped lang="scss">
@import '/assets/css/media.scss';
@import '/assets/css/mixin.scss';
// *********************************
//  スマホ
// *********************************
.anime-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  &__item {
    width: 48%;
    overflow: hidden;
    border-radius: 8px;
    margin-right: 4%;

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  &__link {
    text-decoration: none;
    position: relative;
  }

  &__img {
    width: 100%;
    padding-bottom: 140%;
    border-radius: 5px;
    background-size: 100% auto;
    background-position: center;
    background-color: rgb(44, 44, 44);
  }

  &__title {
    color: #000;
    margin-top: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    @include rem(17);
  }

  &__heart {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 2;
    pointer-events: none;
  }
}

// *********************************
//  タブレット
// *********************************
@include media(tb) {
  .anime-list {
    justify-content: start;

    &__item {
      width: 22%;
      margin-right: 4%;

      &:nth-of-type(2n) {
        margin-right: 4%;
      }
      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}

// *********************************
//  PC
// *********************************
@include media(pc) {
  .anime-list {
    &__item {
      margin-bottom: 20px;
      width: 200px;
      margin-right: 20px;

      &:nth-of-type(2n) {
        margin-right: 20px;
      }
    }

    &__link {
      display: block;

      &:hover {
        .anime-list__layer {
          opacity: 1;
        }
      }
    }

    &__img {
      width: 200px;
      padding-bottom: 280px;
    }

    &__layer {
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(-180deg, rgba(1, 6, 13, 0) 0%, rgba(1, 6, 13, 0.5) 50%, rgba(1, 6, 13, 0.8) 100%);
      width: 100%;
      opacity: 0;
      padding: 20px 15px 0;
      transition: opacity 0.2s ease-in 0s;
    }

    &__title {
      color: #fff;
      font-weight: bold;
      font-size: 18px;
    }
  }
}
</style>
