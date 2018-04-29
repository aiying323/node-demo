<template>
  <article class="second-set-index">
    <section class="box">我是三级子路由组件----index</section>
  </article>
</template>

<script>
export default {
  name: 'secondSetIndex',
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
