// base list
import Vue from 'vue'
import Router from 'vue-router'
import app from './app'

// store
import store from '../vuex/store'

// page list
import doc from './doc'
import history from './history'
import demo from './example/'
import demoCheck from './example/check'

Vue.use(Router)

const router = new Router()
router.map({
  '/': {
    component: doc
  },
  '/history': {
    component: history
  },
  '/demo': {
    component: demo
  },
  '/demo/check': {
    component: demoCheck
  }
})

router.beforeEach(({ to, from, next }) => {
  store.dispatch('UPDATE_PATH', to.path)
  next()
})

router.start(app, '#app')

