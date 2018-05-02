<template>
  <article class="index">
    <section class="box">
     index
    </section>
  </article>
</template>

<script>
export default {
  name: 'homeIndex',
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
  
//  @import "../static/scss/helloWorld.scss";
</style>
