import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7cd38bdc = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _04d6ff3a = () => interopDefault(import('../pages/anime.vue' /* webpackChunkName: "pages/anime" */))
const _2509f0a6 = () => interopDefault(import('../pages/anime/index.vue' /* webpackChunkName: "pages/anime/index" */))
const _27f2fd84 = () => interopDefault(import('../pages/anime/search.vue' /* webpackChunkName: "pages/anime/search" */))
const _2f1d7091 = () => interopDefault(import('../pages/anime/edit/_id.vue' /* webpackChunkName: "pages/anime/edit/_id" */))
const _4b0353ee = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _29df6d2a = () => interopDefault(import('../pages/storage.vue' /* webpackChunkName: "pages/storage" */))
const _1838cce3 = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _1158d06e = () => interopDefault(import('../pages/auth/reset.vue' /* webpackChunkName: "pages/auth/reset" */))
const _3b3abc8e = () => interopDefault(import('../pages/auth/signup.vue' /* webpackChunkName: "pages/auth/signup" */))
const _eac46c7e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _7cd38bdc,
    name: "account"
  }, {
    path: "/anime",
    component: _04d6ff3a,
    children: [{
      path: "",
      component: _2509f0a6,
      name: "anime"
    }, {
      path: "search",
      component: _27f2fd84,
      name: "anime-search"
    }, {
      path: "edit/:id?",
      component: _2f1d7091,
      name: "anime-edit-id"
    }]
  }, {
    path: "/inspire",
    component: _4b0353ee,
    name: "inspire"
  }, {
    path: "/storage",
    component: _29df6d2a,
    name: "storage"
  }, {
    path: "/auth/login",
    component: _1838cce3,
    name: "auth-login"
  }, {
    path: "/auth/reset",
    component: _1158d06e,
    name: "auth-reset"
  }, {
    path: "/auth/signup",
    component: _3b3abc8e,
    name: "auth-signup"
  }, {
    path: "/",
    component: _eac46c7e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
