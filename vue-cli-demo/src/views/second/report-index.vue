<template>
  <article class="second-report">
    <section class="box">我是子路由组件----报表</section>
  </article>
</template>

<script>
export default {
  name: 'secondReport',
  data () {
    return {
      msg: process.env.http.root
    }
  },
  created () {

  },
  components: {
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
//  @import "../static/scss/helloWorld.scss";
</style>
