'use strict'
module.exports = {
  NODE_ENV: '"production"',
  PUBLIC_PATH: '"talk"',
	http: JSON.stringify({
    root: 'http://127.0.0.1:8081', //请求路径
    upload: 'http://fbabyapi.bblink.cn/msg/upload',//图片上传路径
    appId: '', //微信授权id
	})
}
