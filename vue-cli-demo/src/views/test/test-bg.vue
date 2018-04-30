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
      left:0,
      right:0,
      height:667,
      width:750,
      step:750,
      timer:{}
    }
  },
  methods:{
    close(e){
      event.stopPropagation();
      clearInterval( this.timer);
    },
    changeBg(e){
      e.target.style=`background-position:0px;`;
      this.count=0;
      this.timer=setInterval(()=>{
        this.count++;
        /*if(this.count>100){
          this.width=750;
          clearInterval( this.timer);
          return;
        }*/
        this.width=this.width-this.step;
        switch(this.count%10){
          case 0:
            e.target.style=`background-position:-750px -120px;`;
            break;
          case 1:
            e.target.style=`background-position:-1400px -120px;`;
            break;
          case 2:
            e.target.style=`background-position:-1950px -120px;`;
            break;
          case 3:
            e.target.style=`background-position:-2550px -120px;`;
          break;
          case 4:
            e.target.style=`background-position:-3050px -120px;`;
          break;
          case 5:
            e.target.style=`background-position:-3650px -120px;`;
          break;
          case 6:
            e.target.style=`background-position:-4300px -120px;`;
          break;
          case 7:
            e.target.style=`background-position:-5000px -120px;`;
          break;
          case 8:
            e.target.style=`background-position:-5600px -120px;`;
          break;
          case 9:
            e.target.style=`background-position:-6100px -120px;`;
          break;
          default:
            e.target.style=`background-position:0px;`;
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
  background-position:0px;
  .icon-right{
    position: absolute;
    right:20px;
    top:20px;
    color: #fff;
  }
}

$width:750rem;
$height:667px;
@keyframes play {
  0%{
    background-position:0;
  }
  2%{
    background-position:($width*2) 0;
  }
  4%{
    background-position:($width*3) 0;
  }
  6%{
    background-position:($width*4) 0;
  }
  8%{
    background-position:($width*5) 0;
  }
  10%{
    background-position:($width*6) 0;
  }
  12%{
    background-position:($width*7) 0;
  }
  14%{
    background-position:($width*8) 0;
  }
  16%{
    background-position:($width*9) 0;
  }
  18%{
    background-position:($width*10) 0;
  }
  20%{
    background-position:($width*11) 0;
  }
  22%{
    background-position:($width*1) ($height*2);
  }
  24%{
    background-position:($width*2) ($height*2);
  }
  26%{
    background-position:($width*3) ($height*2);
  }
  28%{
    background-position:($width*4) ($height*2);
  }
  30%{
    background-position:($width*5) ($height*2);
  }
  32%{
    background-position:($width*6) ($height*2);
  }
  34%{
    background-position:($width*7) ($height*2);
  }
  36%{
    background-position:($width*8) ($height*2);
  }
  38%{
    background-position:($width*9) ($height*2);
  }
  40%{
    background-position:($width*10) ($height*2);
  }
  42%{
    background-position:($width*11) ($height*2);
  }
  44%{
    background-position:($width*1) ($height*3);
  }
  46%{
    background-position:($width*2) ($height*3);
  }
  48%{
    background-position:($width*3) ($height*3);
  }
  50%{
    background-position:($width*4) ($height*3);
  }
  52%{
    background-position:($width*5) ($height*3);
  }
  54%{
   background-position:($width*6) ($height*3);
  }
  56%{
    background-position:($width*7) ($height*3);
  }
  58%{
    background-position:($width*8) ($height*3);
  }
  60%{
   background-position:($width*9) ($height*3);
  }
  62%{
    background-position:($width*10) ($height*3);
  }
  64%{
    background-position:($width*11) ($height*3);
  }
  66%{
    background-position:($width*1) ($height*4);
  }
  68%{
    background-position:($width*2) ($height*4);
  }
  70%{
    background-position:($width*3) ($height*4);
  }
  72%{
    background-position:($width*4) ($height*4);
  }
  74%{
    background-position:($width*5) ($height*4);
  }
  76%{
    background-position:($width*6) ($height*4);
  }
  78%{
    background-position:($width*7) ($height*4);
  }
  80%{
    background-position:($width*8) ($height*4);
  }
  82%{
    background-position:($width*9) ($height*4);
  }
  84%{
    background-position:($width*10) ($height*4);
  }
  86%{
    background-position:($width*11) ($height*4);
  }
  88%{
    background-position:($width*1) ($height*5);
  }
  90%{
    background-position:($width*2) ($height*5);
  }
  92%{
    background-position:($width*3) ($height*5);
  }
  94%{
   background-position:($width*4) ($height*5);
  }
  96%{
    background-position:($width*5) ($height*5);
  }
  98%{
    background-position:($width*6) ($height*5);
  }
  100%{
    background-position:($width*7) ($height*5);
  }
  
}
</style>
