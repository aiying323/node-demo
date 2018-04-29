<template>
  <article class="second-set-set">
    <section class="knowlege-box">我是三级子路由组件----set</section>
  </article>
</template>

<script>
export default {
  name: 'secondSetSet',
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
