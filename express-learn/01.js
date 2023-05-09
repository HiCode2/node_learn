/**
 * @Author: 韩祺涛
 * @Date: 2023-04-26
 * @Project: node
 */
const express = require('express')
// 创建应用对象
const app = express();
// 创建路由
app.get('/home', (req, res) => {
    // 原生
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers);
    // console.log(req.httpVersion);
    // express
    console.log(req.path); // 获取请求路径
    console.log(req.query); // 获取查询字符串参数
    console.log(req.ip); // 获取客户端ip地址

    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end('hello express')
})
// 监听端口,启动服务
app.listen(9900, (err) => {
    if (err) console.log('服务器启动失败', err)
    else console.log('服务器启动成功, http://172.22.18.146:9900/home')
})
