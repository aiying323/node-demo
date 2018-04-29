<template>
  <article class="main-box">
    <aside class="box">
      <div class="content">看一下我们的box</div>
    </aside>
  </article>
</template>

<script>

export default {
  name: 'messageBox',
  data () {
    return {

    }
  },
  methods:{
    changeBg(){
      
    }
  },
  created () {

  },
  components: {

  }
}
</script>


<style scoped lang="scss">
.main-box {
  margin: 20px 0 ;
}
.box {
  margin: 0 auto;
  width: 300px;
  background-color: #f2f2f2;
  border:1px solid #eee;
  box-sizing: border-box;
  border-radius: 4px;

}
.box > .content{
  margin: 20px;
  height: 200px;
  
}
</style>
