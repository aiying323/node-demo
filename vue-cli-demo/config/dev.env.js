'use strict'
module.exports = {
  NODE_ENV: '"development"',
	http: JSON.stringify({
    root: 'http://192.168.158.235:8081', //请求路径
    upload: 'http://fbabyapi.bblink.cn/msg/upload',//图片上传路径
    appId: '', //微信授权id
	})
}
