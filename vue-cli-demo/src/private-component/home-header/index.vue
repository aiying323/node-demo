<template>
	<article class="header-index">
		<header class="header-bg">
      <i class="fab fa-accusoft fa-3x position-left"></i><span>长沙市中小学生在线学习平台</span>
      <nav class="header-nav">
        <router-link to="/second/report">到knowlege</router-link>   
      </nav>
    </header>
  </article>
</template>

<script>
import { USER_CLEAR } from './../../store/user'
export default {
  name:"homeHeaderIndex",
  props:[],
  data () {
    return {
      
    }
  },
  methods:{
    clear(){
      this.$store.dispatch(USER_CLEAR);
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
.header-bg{
  padding-left: 100px;
  height: 40px;
  line-height: 40px;
  color: #fff;

  background-color: #69A2F9;
  .header-nav{
    display: inline-block;
    margin-left:40px;
  }
  .position-left{
    position: absolute;
    left: 50px;
    color: #FF9621;
  }


}
</style>

