<template>
  <article class="hello-world">
    <el-card class="box-card">
      <div slot="header" class="clearfix box-card-header">
        <span>这是一个数据增删查改分页demo</span>
        <p class="item-tool">
          <el-input class="input-w200" v-model="item.name" placeholder="请输入内容"></el-input>
          <el-button @click="add">新增</el-button>
        </p>
      </div>
      <ul class="item-ul">
        <li v-for="item in list" class="item-list">
          <el-tag v-html="item.id" class="el-tag-big"></el-tag>
          <el-input class="input-w200" v-model="item.name" placeholder="请输入内容"></el-input>
          <el-tooltip class="item" effect="dark" content="点击更新数据" placement="bottom" >
            <el-button @click="update(item)">更新</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="点击删除数据" placement="bottom" >
            <el-button @click="del(item)">删除</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="点击查看数据" placement="bottom" >
            <el-button @click="query(item)">查看</el-button>
          </el-tooltip>
        </li>
      </ul>
      <el-pagination class="item-paging" background layout="prev, pager, next"  :current-page="pageNo" :page-size="pageSize" :total="total" @current-change="handleCurrentChange">
      </el-pagination>
    </el-card>
   
    
    
   

  </article>

</template>

<script>

export default {
  name: 'test',
  data () {
    return {
      list:[],
      pageNo:1,
      pageSize:5,
      total:0,
      item:{
        name:''
      }
    }
  },
  methods:{
    update(item){
      let {id,name,pageNo,pageSize} = {id:item.id,name:item.name,pageNo:this.pageNo,pageSize:this.pageSize};
      this.$axios.post('mock/update',{id,name,pageNo,pageSize}).then(res => {
        this.list = [];
        res.data.result.forEach((item) => {
          let {id ,name ,data} = {id : item.id,name : item.name,data: '' };
          this.list.push({id,name,data});
        });
        this.total = res.data.totalCount;
        this.$message({
          message: res.data.msg,
          type: 'success',
          duration:1000,
          customClass:'el-message-positon',
          center: true
        });  
      });
    },
    del(item){
      this.$axios.post('mock/deleteUser',{id:item.id,pageSize:this.pageSize}).then(res => {
        this.list = [];
        res.data.result.forEach((item) => {
          let {id ,name ,data} = {id : item.id,name : item.name,data: '' };
          this.list.push({id,name,data});
        });
        this.total = res.data.totalCount;
        this.pageNo = 1;
        this.$message({
          message: res.data.msg,
          type: 'success',
          duration:1000,
          customClass:'el-message-positon',
          center: true
        });    
      });
    },
    query(item){
      //console.log(item);
      this.$axios.get('mock/getUserById',{params:{id:item.id}}).then(res => {
        this.$message({
          message: res.data.data,
          customClass:'el-message-positon',
          center: true
        });  
      });
    },
    add(){
      let {id,name,pageSize} = {id:this.item.id,name:this.item.name,pageSize:this.pageSize};
      this.$axios.post('mock/insert',{id,name,pageSize}).then(res => {
        this.list = [];
        res.data.result.forEach((item) => {
          let {id ,name ,data} = {id : item.id,name : item.name,data: '' };
          this.list.push({id,name,data});
        });  
        this.item.name = '';
        this.total = res.data.totalCount;
        this.pageNo = 1;
        this.$message({
          message: res.data.msg,
          type: 'success',
          duration:1000,
          customClass:'el-message-positon',
          center: true
        });  
      });
    },
    handleCurrentChange(val){
      this.pageNo = val;
      this.paging();
    },
    paging(){
      this.$axios.get('mock/getUsersPaging',{params:{pageNo:this.pageNo,pageSize:this.pageSize}}).then(res => {
        this.list = [];
        res.data.result.forEach((item)=>{
          let {id ,name ,data} = {id : item.id,name : item.name,data: '' };
          this.list.push({id,name,data});
        }); 
        this.list = this.list.sort((a,b)=>{
          return parseInt(a['id']) - parseInt(b['id']);
        }); 
        this.total = res.data.totalCount;       
      });
    }
  },
  created () {
    this.paging();
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-tag-big{
  height: 41px;
  line-height: 41px;
  box-sizing: border-box;
  border: none;
  text-align: center;
}
.box-card{
  .box-card-header{
    padding-left: 100px;
    text-align: left;
    font-size: 18px;
  }

}

.item-ul{
  min-height:350px;
  clear: both;
  .item-list{
    padding: 5px 20px;
    line-height: 40px;
    color: #000;
    text-align:center;
    font-size: 16px;
  }
}

.item-tool{
  position: absolute;
  top: 10px;
  right: 0;
  width: 300px;
  height: 40px;
  line-height: 40px;
  color: #000;
  font-size: 16px;

}
.input-w200{
  width: 200px;
}
.item-paging{
  text-align: center;
}
</style>
