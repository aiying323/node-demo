const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let multer  = require('multer');//用express的第三方中间件 multer 实现文件上传功能。

const fs = require('fs');
let state = JSON.parse(fs.readFileSync( './json/state.json'));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/**
	请求拦截进行跨域处理
*/
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    /**
		添加自定义请求头token
    */
    res.header("Access-Control-Allow-Headers", "token,Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
}); 
/**
	使用/images/图片名称.可访问该文件夹下的图片,
	示例：http://localhost:8081/images/completelogo2.png
*/
app.use('/images',express.static('./public/images'));


/**
	模拟文件上传
	前端使用示例代码：
	upload(e){
      let file = e.target.files[0];  
      let param = new FormData(); //创建form对象  
      param.append('test-upload',file);//通过append向form对象添加数据 
      let config = {  
        headers:{'Content-Type':'multipart/form-data'}  
      }; //添加请求头 
      this.$axios.post('mock/upload',param,config).then(res => {
          console.log(res.data);
      });
    }
*/


//设置文件上传路径和文件命名
let storage = multer.diskStorage({
    destination: function (req, file, cb){
        //文件上传成功后会放入public下的upload文件夹
        cb(null, './public/images')
    },
    filename: function (req, file, cb){
        //设置文件的名字为其原本的名字，也可以添加其他字符，来区别相同文件，例如file.originalname+new Date().getTime();利用时间来区分
        cb(null, file.originalname)
    }
});

let upload = multer({
    storage: storage
});

/**文件上传所需代码*/
app.post('/file/upload', upload.single('test-upload'), (req, res) => {
	// 没有附带文件
	if (!req.file) {
		res.json({ ok: false });
	return;
	}

	//拼接文件上传后的网络路径，
	const url = `http://${req.headers.host}/images/${req.file.originalname}`;
	//将其发回客户端
	res.json({
	  	status:9007,
	  	msg:state['9007'],
	  	data:url,
	  	imgName:req.file.originalname
	});
	res.end();
});

app.get('/file/download', (req, res) => {
	res.download(`./public/images/${req.query.imgName}`);
});

module.exports = app;
