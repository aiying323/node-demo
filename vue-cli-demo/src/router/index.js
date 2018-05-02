import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
  /**
    业务描述:本路由包含一下板块
      1、
      2、
      3、
    开发者：liying
    邮箱：liying@talkweb.com.cn
  */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'homeIndex',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/index')), 'index'),
      children: [
        {
          path: '/',
          name: 'home',
          meta:{
            auth:false
          },
          component: r => require.ensure([], () => r(require('@/views/home/index')), 'home'),
        }
      ]
    },





    {
      path: '/helloWorld',
      name: 'helloWorld',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/hello-world')), 'helloWorld')
    },
    {
      path: '/login',
      name: 'login',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/login')), 'login')
    },
    {
      path: '/index',
      name: 'index',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/second/index')), 'index'),
      children: [
        {
          path: '/second/set',
          name: 'secondSet',
          meta:{
            auth:false
          },
          component: r => require.ensure([], () => r(require('@/views/second/set-index')), 'secondSet'),
           children: [
            {
              path: '/second/set/index',
              name: 'secondSetIndex',
              meta:{
                auth:false
              },
              component: r => require.ensure([], () => r(require('@/views/second/three/index')), 'secondSetIndex'),
            },
            {
              path: '/second/set/set',
              name: 'secondSetSet',
              meta:{
                auth:false
              },
              component: r => require.ensure([], () => r(require('@/views/second/three/set')), 'secondSetSet'),
            }
          ]
        },
        {
          path: '/second/report',
          name: 'secondReport',
          meta:{
            auth:false
          },
          component: r => require.ensure([], () => r(require('@/views/second/report-index')), 'secondReport'),
        }
      ]
    },
    {
      path: '/test',
      name: 'test',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/test')), 'test')
    },
    {
      path: '/testbg',
      name: 'testBg',
      meta:{
        auth:false
      },
      component: r => require.ensure([], () => r(require('@/views/test/test-bg')), 'testBg')
    },
  ]
})
