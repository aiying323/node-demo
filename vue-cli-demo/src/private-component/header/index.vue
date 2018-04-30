<template>
	<article class="header-index">
		<header class="header-bg">
          <nav>
            <router-link to="index">到knowlege</router-link>
            <router-link to="login">login</router-link>
            <router-link to="/">首页</router-link>
            <router-link to="/test">测试数据</router-link>
            <router-link to="/testbg">测试背景</router-link>
            <a href="#" v-on:click="clickFn">执行回调</a>
            <a href="#" v-on:click="change">执行修改父组件值</a>
            <a href="#" v-on:click="clear">清除localstorage和vuex</a>
           
          </nav>
          <p>我是子组件的parameter:<span v-text="parameter"></span></p>
        </header>
    </article>
</template>

<script>
import { USER_CLEAR } from './../../store/user'
export default {
  name:"headerIndex",
  props:['parameter','parameterFn'],
  data () {
    return {
      
    }
  },
  methods:{
    clickFn(){
      console.log("我已经接收到参数了"+this.parameter);
      this.parameterFn();
    },
    childFn(){
      console.log("我是一个子方法");  
    },
    change(){
      this.$emit('change-value', "已经修改过了")
    },
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
  clear: both;
}
</style>

