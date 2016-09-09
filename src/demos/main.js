// base list
import Vue from 'vue'
import Router from 'vue-router'
import app from './app'

// page list
import home from './home'
import check from './check'
import doc from './doc'

Vue.use(Router)

const router = new Router()
router.map({
  '/': {
    component: home
  },
  '/check': {
    component: check
  },
  '/doc': {
    component: doc
  }
})
router.start(app, '#app')

