/**
 * @Author: 韩祺涛
 * @Date: 2023-04-20
 * @Project: node
 */
const http = require('http');
// const url = require('url');

// 创建一个服务器
const serve = http.createServer((request, response) => {
    // // 获取请求方法
    // console.log(request.method);i
    // // 获取请求的url
    // console.log(request.url);
    // // 获取http协议的版本号
    // console.log(request.httpVersion);
    // // 获取请求头
    // console.log(request.headers);
    // // 设置响应体
    // response.end('hello world');


    // // 1.声明一个变量
    // let body = '';
    // // 2.监听data事件
    // request.on('data', chunk => {
    //     body += chunk;
    // })
    // // 3.监听end事件
    // request.on('end', () => {
    //     console.log(body);
    //     response.end('hello world');
    // })

    // 解析url
//     let res = url.parse(request.url, true);

    // 实例化url对象
    let url = new URL(request.url, 'http://127.0.0.1:9999');
    console.log(url);
    console.log(url.searchParams)
    console.log(url.searchParams.get('passworld'))

    response.end('hello world');
})

// 监听端口
serve.listen(9999,() => {
    console.log('服务启动成功，http://127.0.0.1:9999')
})
