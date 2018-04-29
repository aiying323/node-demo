/**

	index.js提供常规操作utils脚本，使用说明：
	const util = require('../utils/index.js');路径根据实际情况修改
	util.getOneObject('id','2',[{id:1},{id:2}]);
	...

*/

/**
	功能：
		根据单个属性值查找对象

	入参：
		attrName:类型：string 指定的对象属性名
		value:类型： string/number 指定的对象属性值 此处筛选不区分字符串数值与数字型数值
		list: 类型： Array 指定需要查询的数据集合

	返回值：
	return object 类型： Object 

	方法思路：
		1、 如果list不是一个数组或者属性名不是一个字符串 则返回一个空对象
		2、 过滤条件，如果查询到多个符合条件的元素则取第一个对象，如果没找到就返回一个空对象
		
	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29

*/
let getOneObject = ((attrName,value,list) => {
	/**
		如果list 不是一个数组则返回空对象,或者属性名不是一个字符串
	*/
	if(!(list instanceof Array) || typeof attrName !== 'string'){
		return {};
	}
	let obj=list.filter((item)=>{
		return item[attrName] == value;
	})
	return obj.length > 0 ? obj[0] : {};
})

/**
	功能：
		分页查询

	入参：
		pageNo:类型：number 当前页
		pageSize:类型： number 每页显示多少条
		list: 类型： Array 指定需要分页的数据集合

	返回值：
	return list 类型： Array 

	方法思路：
		1、 如果没有接受到pageNo参数则默认为第一页
		2、 如果没有接收pageSize参数则默认查找全部，pageSize则等于list的长度
		3、 如果list不是一个数组，或者传入无效的参数 则返回一个空数组
		4、 遵循数字string转型number 用于计算，如果pageNo<1则默认为1
		5、 取得开始值 是 （当前页-1）* 每页显示多少条，如果开始条数大于数组长度则为最后一条数据
		6、 取得结束值 是  (开始条+每页显示多少条) ， 如果 结束值大于数组长度 则结束值为数组最后一个元素
		7、 根据条件筛选出符合条件的数据
		
	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29

*/
let paging = ((pageNo , pageSize , list) => {
	/*console.log('pageNo',pageNo,'pageSize',pageSize);*/
	pageNo = pageNo !=null ? pageNo : 1;
	pageSize =  pageSize !=null ? pageSize : list.length;
	if(!(list instanceof Array) || isNaN(pageNo) || isNaN(pageSize) ){
		return [];
	}
	pageNo = parseInt(pageNo);
	pageSize =  parseInt(pageSize);
	pageNo = pageNo < 1 ? 1 : pageNo;
	let start = ((pageNo-1) * pageSize );
	start = start > list.length ? list.length : start;
	let end = start + pageSize;
	/*console.log("start+pageSize:",end)*/
	end = end > list.length ? list.length : end;
	/*console.log("start:",start,"end",end,"list.length",list.length);*/
	let newList = [];
	for(let i = start ; i < end ; i++){
		newList.push(list[i]);
	}
	return newList;
})

/**
	功能：
		查询一个对象在这个对象集合里面的下标

	入参：
		attrName:类型：string 指定在这个对象集合中能标识其身份的属性名称
		value:类型： string/number 指定在这个对象集合中能标识其身份的属性值
		list: 类型： Array 指定需要查找的数据集合

	返回值：
	return 类型： number 对象下标

	方法思路：
		1、 如果list 不是一个数组或者属性名不是一个字符串则返回空对象
		2、 如果找到了该对象则返回对象下标，如果有多个同名对象返回最先找到的数据下标
		3、 如果没找到则返回-1

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29

*/
let getIndex = ((attrName, value, list) => {
	/**
		如果list 不是一个数组则返回空对象,或者属性名不是一个字符串
	*/
	if(!(list instanceof Array) || typeof attrName !== 'string'){
		return {};
	}
	let i = -1;
	list.forEach((item, index)=>{
		if(item[attrName] == value){
			i = index;
			return;
		}
	})
	return i;
})

/**
	功能：
		获取一个自增id

	入参：
		attrName:类型：string 指定根据什么属性自增
		list: 类型： Array 指定需要自增的列表

	返回值：
		return 类型： number 自增id

	方法思路：
		1、 如果传入的不是一个数组或者传入的属性名不是一个字符串，则返回一个时间戳id
		2、 如果列表不存在就返回1
		3、 如果属性在这个list某个对象上不存在就返回时间戳id
		4、 传入属性获取的值不是一个数值 则返回一个时间戳
		5、 如果传入属性获取的值是一个数值，指定一个对象排序方式。对list进行排序，取最大值+1

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29

*/
let getMaxId = ((attrName,list) => {
	if(!(list instanceof Array) || typeof attrName !== 'string'){
		return Date.parse(new Date());
	}
	/**
		处理列表为空的情况
	*/
	if(list.length === 0){
		return 1;
	}
	/**
		处理属性不存在的问题
	*/
	if(list[0][attrName] == null){
		return Date.parse(new Date());
	}
	/**
		如果有不为数字的就返回list.length
	*/
	let obj=list.filter((item)=>{
		return isNaN(item[attrName]);
	})

	/**
		处理属性不是数字的情况
	*/
	if(obj.length > 0){
		return list.length > 0 ? Date.parse(new Date())+1 : Date.parse(new Date());
	}else{
		/**
			处理属性值为数字的情况
		*/
		let sort = function(a , b){
			if(a[attrName] == null){
				a[attrName] = 0;
			}
			if(b[attrName] == null){
				b[attrName] = 0;
			}
			return parseInt(b[attrName]) - parseInt(a[attrName]);
		}
		list = list.sort(sort);
		return parseInt(list[0][attrName])+1;		
	}
	
	
})

/**
	功能
		根据条件查询

	传入参数
		attrArray:类型：Array 为需要查询的属性列表
		item: 类型： Object 指定查询的值
		list: 类型： Array 指定需要查询的列表
		return 类型： Array 返回根据条件筛选后的数据
		type 类型： number --整数。外部调用该方法请传入0
					0：从请求传入
					1：内部递归传入

	返回值：
		list: 类型：Array 

	方法思路：
		1、如果查询条件没有，就返回这个list
		2、如果type为0表示是外部调用这个方法 需要筛选属性值为null或者为''的查询条件
		3、根据查询列表的第一个属性筛选出符合条件的数据集合，并赋值给list
		4、将查询筛选过的条件过滤掉
		5、递归这个方法直到查询条件数组为空。

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29

*/
let queryWithObject = ((attrArray,item,list,type)=>{

	if(attrArray.length <= 0){
		return list;
	}
	/**
		如果item[attrArray[attr]]的值为null或者为'' 就清除一个这个查询条件
	*/
	if(type === 0){
		attrArray = attrArray.filter((attr,index)=>{
			return item[attr] != null && item[attr] !== '';
		})
	}
	/**
		筛选符合条件的数据
	*/
	list = list.filter((data ,index)=>{
		return item[attrArray[0]] == data[attrArray[0]];
	})
	/**
		清除已经筛选过的条件
	*/
	attrArray.splice(0,1);
	/**
		递归
	*/
	queryWithObject(attrArray,item,list,1);
	return list;
}) 

exports = module.exports = {
	getOneObject:getOneObject,
	paging:paging,
	getIndex:getIndex,
	getMaxId:getMaxId,
	queryWithObject:queryWithObject
};