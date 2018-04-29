<template>
  <div class="login">
    <h1 v-html="msg"></h1>
    <a href="javascript:void(0);" @click="loading(0)">加载小学主题</a>
    <a href="javascript:void(0);" @click="loading(1)">加载初中主题</a>
    <a href="javascript:void(0);" @click="loading(2)">加载高中主题</a>
  </div>
</template>

<script>
import { USER_SET } from './../../store/user'

export default {
  name: 'login',
  data () {
    return {
      msg: "这是一个登陆页面"
    }
  },
  created () {
    console.log("页面url参数",this.$getUrlParams())
    console.log("浏览器内核",this.$getKernelVersion())
    /*
      console.log("登陆页面获取得",this.$store.state.user.userId)
      console.log("页面url参数",this.$util.getUrlParams())
      console.log("浏览器内核",this.$util.getKernelVersion())
      let a = { id:1, name:'呵呵1' }
    */
  },
  methods: {
    loading(type) {
      const { THEME } = process.env;
      let id = `${THEME.LIST[type]}-sheet`;
      let onload = () => {
        this.$store.dispatch(USER_SET,{ userId: '12345', userName:'哈哈', type, token: '12345' });
        this.$router.push({ name: 'home' });
      };
      if (process.env.NODE_ENV !== 'development' && !document.getElementById(id)) {
        let css = document.createElement('link');
        css.id = id;
        css.href = `${THEME.HREF}${THEME.LIST[type]}.${THEME.VERSION}.css`;
        css.rel = 'stylesheet';
        css.type = 'text/css'; 
        css.onload = onload;
        document.head.appendChild(css);
      } else {
        onload();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  h1, h2 {
    font-weight: normal;
    display: block;
    color:red;
  }
</style>
