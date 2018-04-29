/**
	使用mock数据模拟真实服务环境的增删查改操作
	其中包括根据id查询单个对象、分页带条件查询、新增对象、修改对象、删除对象等操作
*/
const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const util = require('../utils/index.js');
const user = require('../mock/user.js');
const fs = require('fs');
let state = JSON.parse(fs.readFileSync( './json/state.json'));

let list = user.user.list;

/**
	根据id查询object

	入参： 
		id 类型：string/number

	返回值： 
		json对象 类型：Object   
		{
			status:200,状态码
		  	msg:state['200'],操作提示信息
		  	result:u,需要的对象
		} 

	示例代码：
		this.$axios.get('mock/getUserById',{params:{id:2}}).then(res => {
	          console.log('getUserById:',res.data)
	    });

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.get('/getUserById', (req, res, next) => {
	if(req.query.id !=null){
		let u = util.getOneObject('id',req.query.id,list);
		res.json({
		  	status:200,
		  	msg:state['200'],
		  	result:u,
		  	data:JSON.stringify(u)
		});
		res.end();

	}else{
		next(createError(404));
	}
	
});

/**
	分页查询
	入参： 
		object 类型：Object
		{
			pageNo 类型：number
			pageSize 类型：number
		}

	返回值： 
		json对象 类型：Object 
		{
			status:200,状态码
		  	msg:state['200'],操作提示信息
		  	result:ulist,需要的数据集合
		  	totalCount:ulist.length 数据集合的长度
		} 

	示例代码：
		this.$axios.get('mock/getUsersPaging',{params:{pageNo:2,pageSize:2}}).then(res => {
	          console.log('第2页：',res.data)
	    });

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.get('/getUsersPaging', (req, res, next) => {
	let ulist=util.paging(req.query.pageNo,req.query.pageSize,list);
	res.json({
	  	status:200,
	  	msg:state['200'],
	  	result:ulist,
	  	totalCount:ulist.length
	});
	res.end();
});

/**
	根据id删除用户
	入参： 
		id 类型：string/number
	返回值： 
		json对象 类型：Object  
		{
		  	status:9006,状态码
		  	msg:state['9006'],操作提示信息
		  	result:list,需要的数据集合
		  	totalCount:list.length 数据集合的长度
		} 
	示例代码：
		this.$axios.post('mock/deleteUser',{id:1}).then(res => {
        	console.log(res.data)
    	});

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.post('/deleteUser', (req, res, next) => {
	let index=util.getIndex('id',req.body.id,list);
	if(index >= 0){
		list.splice(index,1);
		res.json({
		  	status:9006,
		  	msg:state['9006'],
		  	result:list,
		  	totalCount:list.length
		});
	}else{
		res.json({
		  	status:9005,
		  	msg:state['9005'],
		 });
	}
	res.end();
});

/**
	新增对象
	入参： 
		object 类型：Object

	返回值： 
		json对象 类型：Object  
		{
		  	status:9003,状态码
		  	msg:state['9003'],操作提示信息
		  	result:list,需要的数据集合
		  	totalCount:list.length 数据集合的长度
		} 
	示例代码：
		this.$axios.post('mock/insert',{name:"jocefd",age:18}).then(res => {
        	console.log(res.data)
    	});

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.post('/insert', (req, res, next) => {
	let id = util.getMaxId('id',list);
	let item = req.body;
	item.id = id;
	list.push(item);
	res.json({
	  	status:9003,
	  	msg:state['9003'],
	  	result:list,
	  	totalCount:list.length
	});
});

/**
	修改对象
	入参： 
		id 类型：string/number
		object 类型：Object

	返回值： 
		json对象 类型：Object 
		{
		  	status:9004,状态码
		  	msg:state['9004'],操作提示信息
		  	result:list,需要的数据集合
		  	totalCount:list.length 数据集合的长度
		} 

	示例代码：
		this.$axios.post('mock/update',{id:3,name:"hello",age:18}).then(res => {
	        console.log(res.data)
	    });

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.post('/update', (req, res, next) => {
	let index=util.getIndex('id',req.body.id,list);
	if(index >= 0){
		list[index] = req.body;
		res.json({
		  	status:9004,
		  	msg:state['9004'],
		  	result:list,
		  	totalCount:list.length
		});
	}else{
		res.json({
		  	status:9005,
		  	msg:'没有这个用户'
		 });
	}
});

/**
	分页加条件查询
	入参：
		object 类型：Object
		{
			pageNo 类型：number
			pageSize 类型：number
			查询条件1 类型：string/number
			...
		}
		

	返回值： json对象 类型：Object  
		{
		  	status:200, 状态码
		  	msg:state['200'],操作提示信息
		  	result:ulist,需要的数据集合
		  	totalCount:ulist.length,数据集合的总条数
		  	pageNo:req.query.pageNo,当前页
		  	pageSize:req.query.pageSize 每页显示的条数
		}
	示例代码：
	this.$axios.get('mock/queryWithPaging',{params:{pageNo:2,pageSize:2,id:1}}).then(res => {
          console.log('第2页：',res.data)
    });

	autor:liying
	email:liying@talkweb.com.cn
	time: 2018-04-29
*/
router.get('/queryWithPaging', (req, res, next) => {
	let attrArray = Object.keys(req.query);
	attrArray = attrArray.filter((item) => {
		return item !== 'pageSize' && item !== 'pageNo'
	})
	console.log("获取浏览器参数",attrArray);
	let datas=util.queryWithObject(attrArray,req.query,list,0);
	let ulist=util.paging(req.query.pageNo,req.query.pageSize,datas);
	res.json({
	  	status:200,
	  	msg:state['200'],
	  	result:ulist,
	  	totalCount:ulist.length,
	  	pageNo:req.query.pageNo,
	  	pageSize:req.query.pageSize
	});
});
exports = module.exports = router;
