<template>
  <article class="index">
    <section class="box">
      <h3>我是index</h3>
      <nav class="set-nav">
        <router-link to="/second/set"> <span class="set-btn"> 点击我有惊喜1 </span> </router-link>   
        <router-link to="/second/report"> <span class="set-btn"> 点击我有惊喜2 </span> </router-link>  
        <router-link to="/">   <span class="set-btn"> 首页 </span>  </router-link>   
      </nav>  
      <router-view></router-view>  
    </section>
  </article>
</template>

<script>
export default {
  name: 'index',
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
  .index{
    padding-top: 60px;
  }
  .set-btn{
    display: inline-block;
    margin: 20px 20px 20px 0 ;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    text-align: center;
    font-size: 14px;

  }
//  @import "../static/scss/helloWorld.scss";
</style>
