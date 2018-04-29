# store使用示例
用于存储全局变量、全局枚举。适应于父子组件通信。重要且常需保存的有跨窗口的数据应使用localstorage（生命周期是永久，
这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。），
其他不跨窗口的数据可使用sessionStorage（仅在当前会话下有效，关闭页面或浏览器后被清除。）请求头信息可使用cookie
由于vuex是内存数据，当强刷的时候js会重新加载导致数据丢失，这里做了一个处理，将locastorage同步存
储

# 获取store属性值
this.$store.getters.user.type

# 更新store属性值
import { USER_SET } from './../../store/user'
this.$store.dispatch(USER_SET,{ userId: '12345', userName:'哈哈', type, token: '12345' });

# 清除store属性值
import { USER_CLEAR } from './../../store/user'
this.$store.dispatch(USER_CLEAR);

# 新增store类

1、在store文件夹下新增xx.js,编写相关代码
2、修改store/index.js 
	#新增的store类添加进来
	import xx from './xx'
	modules: {
    	user,
    	#新增的store类添加进来
    	xx
  	},
  	getters: {
    	user: state => state.user,
    	#新增的store类添加进来
    	xx: state => state.xx
  	}
	



