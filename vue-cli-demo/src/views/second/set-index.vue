<template>
  <article class="second-set">
    <section class="box">
      <h3>我是子路由组件---set</h3>
      <nav class="set-nav">
        <router-link to="/second/set/index"> <span class="set-btn"> set,点击我有惊喜1 </span> </router-link>   
        <router-link to="/second/set/set">   <span class="set-btn"> set,点击我有惊喜2 </span>  </router-link> 
        <router-link to="/index">   <span class="set-btn"> 回去 </span>  </router-link>   
      </nav>  
      <router-view></router-view>  
    </section>
  </article>
</template>

<script>
export default {
  name: 'secondSet',
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
