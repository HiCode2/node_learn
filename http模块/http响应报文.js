/**
 * @Author: 韩祺涛
 * @Date: 2023-04-20
 * @Project: node
 */
const http = require('http');

const server = http.createServer((request, response) => {
    // 设置响应状态码
    response.statusCode = 200;
    // 设置响应状态描述
    response.statusMessage = 'OK';
    // 设置响应头
    response.setHeader('Content-Type', 'text/html;charset=utf-8');
    response.setHeader('Server', 'nodejs/12.16.1');
    response.setHeader('name','hqt');
    response.setHeader('test',['hqt','hqt2']);
    // 设置响应体
    response.write('hello world');

    response.end('hello world');
})

server.listen(9999, () => {
    console.log('服务启动成功，http://127.0.0.1:9999')
})
