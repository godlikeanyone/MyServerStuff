var ua = navigator.userAgent;
     if(ua.indexOf("MicroMessenger") > -1) {
         window.alert("请不要使用微信内置浏览器访问本站\n点击确定后将跳转至Chrome下载链接");
         window.location.href='https://www.google.com/intl/zh-CN/chrome/';
}