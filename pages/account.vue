<template>
  <div class="content-area">
    <FlashMessage
      v-show="flashMessage.content"
      :flash-message="flashMessage"
    />
    <h1 class="heading--large">アカウント情報</h1>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="account-form"
    >
      <!-- <div class="account-form__avatar-wrapper">
        <v-avatar color="indigo" size="70" class="account-form__avatar">
          <input
            ref="fileInput"
            type="file"
            class="account-form__avator-input"
            @change="photoInput"
          >
          <v-icon
            v-show="!userPhotoURL"
            dark
            x-large
            class="account-form__avator-photo"
            @click="changeIcon"
          >
            mdi-account-circle
          </v-icon>
          <img
            v-show="userPhotoURL"
            :src="userPhotoURL"
            class="account-form__avator-photo"
            alt="userName"
            @click="changeIcon"
          >
        </v-avatar>
        <span class="account-form__avator-plus" @click="changeIcon"></span>
      </div> -->

      <v-text-field
        v-model="userName"
        :rules="nameRules"
        label="名前"
        required
        @change="nameInput"
      ></v-text-field>

      <v-text-field
        v-model="userEmail"
        label="メールアドレス"
        required
        disabled
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="save"
      >
        保存
      </v-btn>

      <v-btn
        class="mr-4"
        color="error"
        @click="destroy"
      >
        アカウント削除
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    if (this.isChanged) {
      if (!confirm('変更を保存せずに移動しますか？')) {
        return
      }
    }
    next();
  },
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '名前は必須です。',
        v => (v && v.length <= 10) || '名前は10文字以内で入力してください。',
      ],
      isChanged: false,
      email: '',
      userName: '',
      userEmail: '',
    }
  },
  computed: {
    userPhotoURL() {
      return this.$store.getters['auth/getUserPhotoURL']
    },
    flashMessage() {
      return this.$store.getters['auth/getFlashMessage']
    },
  },
  created() {
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    this.userName = this.$store.getters['auth/getUserName'] || userInfo.userName
    this.userEmail = this.$store.getters['auth/getUserEmail'] || userInfo.userEmail

    userInfo = {
      userName: this.userName,
      userEmail: this.userEmail,
    }
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
  },
  destroyed() {
    sessionStorage.setItem('userInfo', '')
    sessionStorage.removeItem('userInfo')
    this.$store.dispatch('auth/resetFlashMessage')
  },
  methods: {
    save() {
      this.$store.dispatch('auth/updateProfile', {
        userName: this.userName,
        userPhotoURL: this.userPhotoURL,
      })
      this.isChanged = false
    },
    // changeIcon() {
    //   this.$refs.fileInput.click()
    // },
    // photoInput() {
    //   const file = this.$refs.fileInput.files[0]
    //   this.$store.dispatch('auth/photoInput', file)
    //   this.isChanged = true
    // },
    destroy() {
      this.$store.dispatch('auth/destroy')
    },
    nameInput() {
      this.isChanged = true
    },
  }
}
</script>

<style scoped lang="scss">
@import '/assets/css/media.scss';

.account-form {
  &__avatar {
    cursor: pointer;

    &-wrapper {
      position: relative;
      display: block;
      margin: 10px auto 15px;
      width: 70px;
      height: 70px;
    }
  }

  &__avator-input {
    display: none;
  }

  &__avator-plus {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #333;
    border: 2px solid #fff;
    position: absolute;
    bottom: -1px;
    right: -1px;
    z-index: 1;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      display: block;
      width: 8px;
      height: 2px;
      background-color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }
  }
}

@include media(tb) {
  .account-form {
    &__avatar {
      &-wrapper {
        margin-left: 0;
      }
    }
  }
}
</style>
