export default function(router, store) {
  router.beforeEach((to, from, next)=>{
    /*
      这里可以添加统一处理url参数的方法
    */
    if (to.meta.auth) {
      if (store.getters.user.token !== null && store.getters.user.token !== '') {
        next();
      } else {
        next({
          path: '/login',
          query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next();
    }
  })
}
