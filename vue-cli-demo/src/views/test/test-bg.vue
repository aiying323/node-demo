<template>
  <article class="hello-world">
    <aside class="fixed-box" @click="changeBg">
     <i class="fas fa-times fa-4x icon-right" @click="close"></i>
    </aside>
   

  </article>

</template>

<script>

export default {
  name: 'testBg',
  data () {
    return {
      count:1,
      height:667,
      width:375,
      step:375,
      timer:{}
    }
  },
  methods:{
    close(e){
      event.stopPropagation();
      clearInterval( this.timer);
    },
    /**
        1、页面初始化的时候用js获取手机的屏高和屏宽
        2、初始化数据：图片的左位置是 0，步长是屏宽
        3、background-size 宽为 屏宽*小图片横向个数，高位：屏高*小图片个数
        4、放到计时器中写逻辑 我这里只写了第一行的算法，5行算法你自己补充
         向下 宽和高 都是 负值， 用计数器% 图片横向数 等于0 时 初始宽度位0 高度同理计算
    */
    changeBg(e){
      e.target.style=`background-position:0px;`;
      this.count=0;
      this.timer=setInterval(()=>{
        this.count++;
        if(this.count>100){
          this.width=375;
          clearInterval( this.timer);
          return;
        }
        this.width=this.width-this.step;

        if(this.count%10==0){
           this.width=0;
        }else{
           e.target.style=`background-position:${this.width}px 0px`;
        }
       

        
        console.log(this.count);
      },1000)
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
.fixed-box{
  width:100%;
  height:667px;
  box-sizing: border-box;
  background: url(../../assets/images/bg_home1.jpg); 
  background-position:0px 0px;
  background-repeat:no-repeat;
  background-size:4125px 3335px;

  .icon-right{
    position: absolute;
    right:20px;
    top:20px;
    color: #fff;
  }
}
</style>

