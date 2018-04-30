<template>
  <article class="hello-world">
    <el-card class="box-card">  
      <div slot="header" class="clearfix box-card-header">
        <span>这是一个进度条示例demo</span>
       
      </div>
      <div class="box-card-body">     
          <el-progress class="el-progress-w" :percentage="progress" :stroke-width="18" color="#8e71c7">
          </el-progress>
          <i class="far fa-plus-square fa-3x icon-plus-right" @click="plus"></i>
          <i class="far fa-minus-square fa-3x icon-reduce-right" @click="reduce"></i>
      </div>
    </el-card>

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
          <el-tag v-html="item.id" class="el-tag-big float-left"></el-tag>
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
      <el-pagination v-if="list.length>0" class="item-paging" background layout="prev, pager, next"  :current-page="pageNo" :page-size="pageSize" :total="total" @current-change="handleCurrentChange">
      </el-pagination>
    </el-card>
   
    <el-card class="box-card">  
      <div slot="header" class="clearfix box-card-header">
        <span>这是一个树形demo</span>
      </div>
      <div class="box-card-body">
          <h3>示例一</h3> 
          <p class="plus-reduce-tree">    
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            <h3>示例二</h3>
          </p>
          <p>
            <el-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></el-tree>
          </p>
      </div>
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
      progress:10,
      step:1,
      data:[],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
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
        this.list = this.list.sort((a,b)=> parseInt(a['id']) - parseInt(b['id']) ); 
        this.total = res.data.totalCount;       
      });
    },
    plus(){
      this.progress = this.progress + this.step;
      this.progress = this.progress > 100 ? 100 : this.progress;
    },
    reduce(){
      this.progress = this.progress - this.step;
      this.progress = this.progress < 0 ? 0 : this.progress;
    },
    handleNodeClick(data) {
      console.log(data);
    }
  },
  created () {
    this.paging();
    this.$axios.get('json/tree').then(res => {
      this.data=res.data;
    });
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box-card{
  .box-card-body{
    position: relative;
    padding-left: 100px;
    min-height:30px;
    .el-progress-w{
      position: absolute;
      top: 0;
      right: 80px;
      width: 85%;

    }
    .icon-plus-right{
      position: absolute;
      top: -8px;
      right: 45px;
      color: #409EFF;

    }
    .icon-reduce-right{
      position: absolute;
      top: -8px;
      right: 10px;
      color: #409EFF;

    }
  }

}

.box-card{
  margin: 10px;
  .box-card-header{
    position: relative;
    padding-left: 100px;
    min-height:30px;
    text-align: left;
    font-size: 18px;
    .item-tool{
      position: absolute;
      top: -10px;
      right: 0;
      width: 300px;
      height: 40px;
      line-height: 40px;
      color: #000;
      font-size: 16px;

    }
  }
  .item-ul{
    margin: 0 auto;
    width: 600px;
    min-height:350px;
    clear: both;
    .item-list{
      padding: 5px 20px;
      line-height: 40px;
      color: #000;
      text-align:left;
      font-size: 16px;
      .el-tag-big{
        min-width: 40px;
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        text-align: center;
        font-size: 16px;
      }
      .float-left{
        float: left;
        margin-top: 1px;
        margin-right: 5px;
      }
    }
  }
  .input-w200{
    width: 200px;
  }
  .item-paging{
    text-align: center;
  }
}


</style>
