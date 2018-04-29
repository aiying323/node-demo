import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'index',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/index')), 'index')
    }
  ]
})
