<template>
  <div>
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
      <h1 class="heading--large form--general__heading">新規登録</h1>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="名前"
        required
      ></v-text-field>

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
        type="password"
      ></v-text-field>



      <div class="form__buttons">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="signup"
        >
          新規登録
        </v-btn>

        <v-btn
          text
          :to="'/auth/login'"
        >
          ログイン
        </v-btn>
      </div>

    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || '名前は必須です。',
        v => (v && v.length <= 10) || '名前は10文字以内で入力してください。',
      ],
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
  mounted() {
    this.$store.dispatch('auth/resetFlashMessage')
  },
  methods: {
    signup() {
      this.$store.dispatch('auth/signup', {
        name: this.name,
        email: this.email,
        password: this.password,
      })
    }
  },
}
</script>

<style>

</style>
