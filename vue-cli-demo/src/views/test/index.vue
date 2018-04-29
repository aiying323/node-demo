<template>
  <article class="hello-world">
    <h1>test</h1>
    <ul>
      <li v-for="item in list" class="item-list">
        <span class="item-title" v-text="item.id"></span>
        <input type="text" name="name" v-model="item.name">
        <span class="item-btn" @click="update(item)">更新</span>
        <span class="item-btn" @click="del(item)">删除</span>
        <span class="item-btn" @click="query(item)">查看</span>
        <p class="item-detail" v-html="item.data"></p>
      </li>
    </ul>
    <p class="item-tool">
      <input type="text" v-model="item.name"/>
      <span class="item-btn" @click="add(item)">新增</span></p>
  </article>

</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      list:[1,2,3],
      item:{
        name:''
      }
    }
  },
  methods:{
    update(item){
      this.$axios.post('mock/update',item).then(res => {
        this.list = res.data.result.sort((a,b)=>{
          return parseInt(a['id']) - parseInt(b['id']);
        });  
      });
    },
    del(item){
      this.$axios.post('mock/deleteUser',{id:item.id}).then(res => {
        this.list = res.data.result.sort((a,b)=>{
          return parseInt(a['id']) - parseInt(b['id']);
        });  
      });
    },
    query(item){
      this.$axios.get('mock/getUserById',{params:{id:item.id}}).then(res => {
        this.$nextTick(()=>{
           item.data=res.data.data;
        });
      });
    },
    add(item){
      this.$axios.post('mock/insert',item).then(res => {
        this.list = res.data.result.sort((a,b)=>{
          return parseInt(a['id']) - parseInt(b['id']);
        });  
        item.name='';
      });
    },
  },
  created () {
    this.$axios.get('mock/getUsersPaging',{params:{pageNo:1,pageSize:10}}).then(res => {
      this.list=[];
      res.data.result.forEach((item)=>{
         item.data='';
         this.list.push(item);
      }); 
      this.list = this.list.sort((a,b)=>{
        return parseInt(a['id']) - parseInt(b['id']);
      });        
    });
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item-list{
  padding: 0 100px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
}
.item-tool{
  padding: 0 112px;
  line-height: 40px;
  color: #fff;
  font-size: 16px;

}
</style>
