<template>
  <div>
    <v-navigation-drawer
      v-if="loginState"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list-item two-line>
        <!-- <v-list-item-avatar>
          <v-avatar color="indigo">
            <v-icon v-show="!userPhotoURL" dark>
              mdi-account-circle
            </v-icon>
            <img
              v-show="userPhotoURL"
              :src="userPhotoURL"
            >
          </v-avatar>
        </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title>{{ userName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon v-if="loginState" @click.stop="drawer = !drawer" />
      <router-link to="/" class="title-wrapper">
        <v-toolbar-title v-text="title" />
      </router-link>
      <v-spacer />
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-list',
          title: 'マイリスト',
          to: '/anime',
        },
        {
          icon: 'mdi-play-box-outline',
          title: '検索',
          to: '/anime/search',
        },
        {
          icon: 'mdi-account',
          title: 'アカウント',
          to: '/account',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'アニメマネージャー',
    }
  },
  computed: {
    loginState() {
      return this.$store.getters['auth/getLoginState']
    },
    userName() {
      return this.$store.getters['auth/getUserName']
    },
    userPhotoURL() {
      return this.$store.getters['auth/getUserPhotoURL']
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  },
}
</script>

<style scoped lang="scss">
.title-wrapper {
  text-decoration: none;
  color: #000;
}
</style>
