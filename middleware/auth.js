import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ({ store, redirect, route }) {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.dispatch('auth/setUserInfo', user)
      
      store.dispatch('anime/setFavoriteAnimes', user.uid)

    } else if (!route.path.match(/\/auth\//)) {
      redirect('/auth/login')
    }
  });
}