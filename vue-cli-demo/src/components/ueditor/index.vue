<template>
	<article class="edit-index">
    <div id="editor"></div>
  </article>
</template>

<script>
import '../../../static/ueditor/ueditor.config.js'
import '../../../static/ueditor/ueditor.all.js'
import '../../../static/ueditor/lang/zh-cn/zh-cn.js'; 
export default {
  name: "UEditor",
  props: {
      id: {
          type: String
      },
      config: {
          type: Object
      }
  },
  data () {
    return {
      editor: null
    }
  },
  mounted() {
    //初始化UE
    const _this = this;
    this.editor = UE.delEditor("editor");
    this.editor = UE.getEditor('editor',this.config);
  },
  destoryed() {
    this.editor.destory();
  },
  methods:{
    getUEContent: function(){
      return this.editor.getContent();
    },
    getContentTxt: function(){
      return this.editor.getContentTxt();
    }

  },
  created () {
    console.log("测试一下",this.config)

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.edit-index{
		#edit{
      width: 100%;
      height:300px;
      border:1px solid red;
    }
	}
//  @import "../static/scss/helloWorld.scss";
</style>
