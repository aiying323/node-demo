<template>
  <article class="index">
    <home-header-index></home-header-index>
    <section class="box">
      <router-view></router-view>  
    </section>
  </article>
</template>

<script>
export default {
  name: 'homeIndex',
  data () {
    return {
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
