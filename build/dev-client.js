// 配合dev-server.js监听html文件变动,也能够触发自动更行
// 引入 webpack-hot-middleware/client
var hotClient = require('webpack-hot-middleware/client');

// 订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload();
  }
});