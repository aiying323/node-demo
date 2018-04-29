# 以下为readme组件描述示例

# components 文件夹下存放独立组件，业务相关的组件可放置于private-component中

# header-index 为头部业务组件
  
  1、 header-index: 通用的头部
     组件对应文件：header/index.vue

  2、......

# 新增组件

  1、在private-component文件夹下新建组件描述文件夹xx
  2、在private-component/xx文件夹下新建index.vue（为默认组件文件，也可以为[组件描述名]-[组件样式名]）并编写相关代码
  3、在index.js注册组件
  # 新增引入代码
  import xx from './xx/index.vue'

  const components = [
    # 新增组件定义名
    xx
  ];

  export default {
    install: Vue => {
      components.map(component => {
        Vue.component(component.name, component);
      })
    }
  }

# 使用组件
   
  在xx.vue中使用组件

  例如：
  <template>
    <article>
      <header-index></header-index>
    </article>
  </template>
  <script>

    export default {
      ...
    }

  </script>

