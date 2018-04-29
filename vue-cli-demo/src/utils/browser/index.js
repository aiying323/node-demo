//获取内核版本
export function getKernelVersion() {
  let u = navigator.userAgent;
  return {
    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
    iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //是否iPad
    weChat: u.match(/MicroMessenger/i) != null //是否为微信
  }
}

//获取地址栏参数
export function  getUrlParams() {
  console.log(window.location.href)
  if (window.location.href.indexOf('?') === -1) return {}
  let urlParams = window.location.href.split('?')[1];
  let paramsArr = urlParams.split('&');
  let keyv = paramsArr.map(v => v.split('='));
  let p = {};
  keyv.map(v => {
    p[v[0]] = v[1]
  })
  return p
}

   