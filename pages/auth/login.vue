<template>
  <div class="">
    <FlashMessage
      v-show="flashMessage.content"
      :flash-message="flashMessage"
    />
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form--general"
    >
      <!-- <v-alert
        dense
        outlined
        type="success"
      >
        テストユーザーとしてログインできます。
      </v-alert> -->
      <h1 class="heading--large form--general__heading">ログイン</h1>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="メールアドレス"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="パスワード"
        required
        type="text"
      ></v-text-field>

      <div class="form__buttons">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="login"
        >
          ログイン
        </v-btn>

        <v-btn
          text
          :to="'/auth/signup'"
        >
          アカウント登録
        </v-btn>
      </div>

      <!-- <div class="form--general__reset">
        <router-link to="reset" class>パスワードを忘れたとき</router-link>
      </div> -->

    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      email: '',
      emailRules: [
        v => !!v || 'メールアドレスは必須です。',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です。',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'パスワードは必須です。',
        v => (v && v.length >= 8) || 'パスワードは8桁以上で入力してください。',
      ],
    }
  },
  computed: {
    flashMessage() {
      return this.$store.getters['auth/getFlashMessage']
    }
  },
  methods: {
    login() {
      this.$store.dispatch('auth/login', {
        email: this.email,
        password: this.password,
      })
      // this.$store.dispatch('anime/setRegisterdAnimes')
    }
  }
}
</script>

<style scoped lang="scss">
@import '/assets/css/mixin.scss';

.form--general__reset {
  @include rem(15);
  margin-top: 12px;
}
</style>
