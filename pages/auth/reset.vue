<template>
  <div class="container-bgwhite">
    <h1>パスワードの再設定</h1>
    <p>登録したメールアドレスへ、パスワードの再設定メールをお送りします。</p>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="登録したメールアドレス"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="send"
      >
        送信
      </v-btn>

      <v-btn
        class="mr-4"
        text
        :to="'/auth/login'"
      >
        戻る
      </v-btn>

    </v-form>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  data() {
    return {
      valid: true,
      email: 'test@test.com',
      emailRules: [
        v => !!v || 'メールアドレスは必須です。',
        v => /.+@.+\..+/.test(v) || 'メールアドレスが不正です。',
      ],
    }
  },
  methods: {
    send() {
      const auth = getAuth();
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.$store.dispatch('auth/setFlashMessage', {
            type: 'success',
            content: 'パスワードの再設定メールを送信しました。'
          })
          this.$router.push('/auth/login')
        })
        .catch((error) => {
          console.error(error) //eslint-disable-line
        });
    }
  }
}
</script>

<style>

</style>