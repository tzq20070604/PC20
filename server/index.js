// 处理https网络请求
console.log("模块搜索路径：", module.paths);
const https = require('https');
const http = require('http')
const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');

const dirPath = path.join(__dirname, 'certs')
const options = {
  key: fs.readFileSync(dirPath + '/localhost-key.pem'),
  cert: fs.readFileSync(dirPath + '/localhost-cert.pem')
};

server.use(router);
// https.createServer(options, server).listen(8888,()=>{
//   console.log("https服务启动成功，成功监听8888端口")
// });
http.createServer(options, server).listen(9999,()=>{
  console.log("https服务启动成功，成功监听9999端口")
});
server.on("error", (err) => {
  console.log(err)
})
