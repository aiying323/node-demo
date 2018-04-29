<template>
  <article class="hello-world">
    <h1 v-html="msg"></h1>
    <h1 v-html="parameter"></h1>
    <header-index :parameter="parameter" :parameter-fn="parameterFn" @change-value="changeValue" ref="editor"></header-index>
    <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="upload"/>  
    <ul>
      <li class="index" v-for="(item, index) in imgs" :key="index">
          <img :src="item.imgUrl">
      </li>
    </ul>
    <message-box>fdaf</message-box>
    <message-box-theme1></message-box-theme1>
    <message-box-normal></message-box-normal>
    

    <UEditor :config="config"></UEditor>

  </article>

</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: process.env.http.root,
      parameter:'我是父容器的嘿嘿',
      config: {
            
            autoHeightEnabled: false,
            autoFloatEnabled: true,
            initialContent:'请输入内容',   //初始化编辑器的内容,也可以通过textarea/script给值，看官网例子
            autoClearinitialContent:true, //是否自动清除编辑器初始内容，注意：如果focus属性设置为true,这个也为真，那么编辑器一上来就会触发导致初始化的内容看不到了
            initialFrameWidth: null,
            initialFrameHeight: 450,
            BaseUrl: '',
            UEDITOR_HOME_URL: 'static/ueditor/'
      },
      imgs:[]
    }
  },
  watch:{
    /**
      监听parameter参数是否发生了改变
    */
    parameter:function(newValue,oldValue){
      this.msg="我发现parameter改变了"
    }
  },
  methods:{
    /**
      子组件使用父组件的回调函数
    */
    parameterFn(){
      console.log("我在执行回调函数");
    },
    /**
      子组件修改父组件的值
    */
    changeValue(val){
      this.parameter=val;
    },
    /**
      axios方式实现文件上传，并预览
    */
    upload(e){
      let file = e.target.files[0];  
      let param = new FormData(); //创建form对象  
      param.append('test-upload',file);//通过append向form对象添加数据 
      let config = {  
        headers:{'Content-Type':'multipart/form-data'}  
      }; //添加请求头 
      this.$axios.post('file/upload',param,config).then(res => {
          console.log(res.data);
          let img = {
            imgUrl:res.data.data
          }
          this.imgs.push(img);
      });
    }
  },
  created () {
    /**
      使用post请求获取数据,此接口为spring boot提供
    this.$axios.post('doPost',{userId:1,userName:'jack',password:'123456',realName:'杰克',age:1,token:''}).then(res => {
          console.log(res.data)
    });
      使用get请求获取数据,此接口为spring boot提供

    this.$axios.get('doGet').then(res => {
          console.log(res.data)
    });   
    */
    /**
      获取json数据
    */
     console.log("我获取了本地得json:"+this.$testJson.name)
    /**
      调用子组件的方法
    */
    this.$nextTick(()=>{
       this.$refs.editor.childFn();
    });
    //console.log(this.$util.getUrlParams());
    /** 
      使用mock请求数据
    
    this.$axios.post('mock/api/testPost',{userId:1,userName:'jack',password:'123456',realName:'杰克',age:1,token:''}).then(res => {
          console.log(res.data)
    });

      使用mock请求数据
    
    this.$axios.get('mock/api/test').then(res => {
          console.log(res.data)
    });

    
      使用mock请求数据
    
    this.$axios.get('mock/data2').then(res => {
          console.log(res.data)
    });
    */

    this.$axios.get('mock/getUserById',{params:{id:2}}).then(res => {
          console.log('getUserById:',res.data)
    });
    this.$axios.get('mock/getUsersPaging',{params:{pageNo:2,pageSize:2}}).then(res => {
          console.log('第2页：',res.data)
    });
    this.$axios.get('mock/getUsersPaging',{params:{pageNo:3,pageSize:2}}).then(res => {
          console.log('第3页：',res.data)
    });
    this.$axios.post('mock/deleteUser',{id:1}).then(res => {
        console.log(res.data)
    });

    this.$axios.post('mock/insert',{name:"jocefd",age:18}).then(res => {
        console.log(res.data)
    });
    this.$axios.post('mock/update',{id:3,name:"hello",age:18}).then(res => {
        console.log(res.data)
    });
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
//  @import "../static/scss/helloWorld.scss";
</style>
