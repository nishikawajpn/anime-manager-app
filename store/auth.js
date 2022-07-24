import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, deleteUser } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import db from "@/plugins/firebase.js";

// *********************************
// state
// *********************************
export const state = () => ({
  loginState: false,
  flashMessage: {},
  userId: '',
  userName: '',
  userEmail: '',
  userPhotoURL: '',
})

// *********************************
// mutations
// *********************************
export const mutations = {
  setLoginState(state, payload) {
    state.loginState = payload
  },
  setUserName(state, payload) {
    state.userName = payload
  },
  setUserId(state, payload) {
    state.userId = payload
  },
  setUserEmail(state, payload) {
    state.userEmail = payload
  },
  setUserPhotoURL(state, payload) {
    state.userPhotoURL = payload
  },
  setFlashMessage(state, payload) {
    state.flashMessage = {
      type: payload.type,
      content: payload.content
    }
  },
}

// *********************************
// actions
// *********************************
export const actions = {

  async signup({ commit }, payload) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        console.log(user) // eslint-disable-line

        commit('setFlashMessage', {
          type: 'success',
          content: '新規登録に成功しました。',
        })

        await updateProfile(auth.currentUser, {
          displayName: payload.name,
        }).then(() => {
            this.$router.push('/')
          }).catch((error) => {
            console.error(error) // eslint-disable-line
          });
      })
      .catch((error) => {
        console.log(error) // eslint-disable-line
        commit('setFlashMessage', {
          type: 'error',
          content: '新規登録に失敗しました。',
        })
      });
  },
  async login({ commit }, payload) {
    let user
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then(async(userCredential) => {
        user = userCredential.user;
        commit('setLoginState', true)
        commit('setUserName', user.displayName)
        commit('setUserId', user.uid)
        commit('setUserEmail', user.email)
        commit('setFlashMessage', {
          type: 'success',
          content: `こんにちは、${user.displayName}さん。`,
        })

        const querySnapshot = await getDocs(collection(db, "users", user.uid, 'animes'));
        const favoriteAnimes = []
        querySnapshot.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data()) // eslint-disable-line
          favoriteAnimes.push(doc.data())
        });
        commit('anime/setFavoriteAnimes', favoriteAnimes, { root: true })

        this.$router.push('/anime')
      })
      .catch((error) => {
        console.error(error) // eslint-disable-line
        commit('setFlashMessage', {
          type: 'error',
          content: 'メールアドレス、またはパスワードが違います。',
        })
      });

  },

  async updateProfile({ commit }, payload) {
    const auth = getAuth();

    await updateProfile(auth.currentUser, {
      displayName: payload.userName,
      photoURL: payload.userPhotoURL,

    }).then(() => {
      const user = auth.currentUser;
      if (user !== null) {
        commit('setUserName', user.displayName)
        commit('setUserPhotoURL', user.photoURL)
      }

      commit('setFlashMessage', {
        type: 'success',
        content: 'アカウント情報を更新しました。',
      })

    }).catch((error) => {
      console.error(error) // eslint-disable-line

    });
  },

  async photoInput({ commit }, payload) {
    const filePath = `/users/${payload.name}`

    const storage = getStorage();
    const storageRef = ref(storage, filePath);

    await uploadBytes(storageRef, payload).then((snapshot) => {
      console.log(snapshot); // eslint-disable-line

      const storage = getStorage();
      getDownloadURL(ref(storage, filePath))
        .then((url) => {
          // this.userPhotoURL = url
          commit('setUserPhotoURL', url)
        })
        .catch((error) => {
          console.error(error) // eslint-disable-line
        });
    });
  },

  async logout({ commit }) {
    const auth = getAuth();
    await signOut(auth).then(() => {
      commit('setLoginState', false)
      commit('setUserName', '')
      commit('setUserId', '')
      commit('setUserEmail', '')
      commit('setFlashMessage', {
        type: 'success',
        content: 'ログアウトしました。',
      })
      this.$router.push('/auth/login')
    }).catch((error) => {
      console.error(error) // eslint-disable-line
    });
  },

  async destroy({ commit }, ) {
    if (confirm('本当にアカウントを削除しますか？')) {
      const auth = getAuth();
      const user = auth.currentUser;

      await deleteUser(user).then(() => {
        console.log(user) // eslint-disable-line
        commit('setLoginState', false)
        commit('setUserName', '')
        commit('setUserId', '')

      }).catch((error) => {
        console.error(error) // eslint-disable-line
      });
    }
  },

  setFlashMessage({ commit }, payload) {
    commit('setFlashMessage', {
      type: payload.type,
      content: payload.content,
    })
  },

  resetFlashMessage({ commit }) {
    commit('setFlashMessage', {
      type: null,
      content: null,
    })
  },

  setUserInfo({ commit }, payload) {
    commit('setLoginState', true)
    commit('setUserId', payload.uid)
    commit('setUserName', payload.displayName)
    commit('setUserEmail', payload.email)
    commit('setUserPhotoURL', payload.photoURL)
  },

}

// *********************************
// getters
// *********************************
export const getters = {
  getLoginState: state => state.loginState,
  getFlashMessage: state => state.flashMessage,
  getUserId: state => state.userId,
  getUserName: state => state.userName,
  getUserEmail: state => state.userEmail,
  getUserPhotoURL: state => state.userPhotoURL,
}
