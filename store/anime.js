import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";
import db from "@/plugins/firebase.js";

// ********************************* 
// state 
// *********************************
export const state = () => ({
  favoriteAnimes: [],
  // searchResults: [],
  test: ''
})

// ********************************* 
// mutations 
// *********************************
export const mutations = {
  setFavoriteAnimes(state, payload) {
    state.favoriteAnimes = payload
  }
}

// *********************************
// actions 
// *********************************
export const actions = {

  async setFavoriteAnimes({ commit }, payload) {
    const querySnapshot = await getDocs(collection(db, "users", payload, 'animes'));
    const favoriteAnimes = []
    querySnapshot.forEach((doc) => {
      favoriteAnimes.push({
        ...doc.data(),
        id: doc.id,
      })
    });
    commit('setFavoriteAnimes', favoriteAnimes)
  },

  async addFavoriteAnimes({ commit }, payload) {
    await addDoc(collection(db, "users", payload.uid, 'animes'), {
      title: payload.title,
      image: payload.image,
      point: '0',
      memo: '',
    });
  },

  async removeFavoriteAnimes({ commit }, payload) {
    await deleteDoc(doc(db, "users", payload.uid, 'animes', payload.animeId));
    this.$router.go(-1)
  },

  async saveReview({ commit }, payload) {
    const animeRef = doc(db, "users", payload.uid, 'animes', payload.animeId);
    await updateDoc(animeRef, {
      point: payload.point,
      memo: payload.memo,
    });
  }

}

// *********************************
// getters 
// *********************************
export const getters = {
  getSearchResults: (state => state.searchResults),
  getTargetAnime: (state) => (index) => state.searchResults[index],
  getFavoriteAnimes: (state => state.favoriteAnimes)
}