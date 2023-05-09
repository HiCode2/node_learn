/**
 * @Author: 韩祺涛
 * @Date: 2023-04-20
 * @Project: node
 */
const http = require('http');
const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        let url = new URL(request.url, 'http://127.0.0.1:9999');
        if (url.pathname === '/login') {
            response.end('login')
        } else if (url.pathname === '/reg') {
            response.end('reg')
        } else {
            response.end('404')
        }
    } else {
        response.end('404')
    }
})
server.listen(9999, () => {
    console.log('服务启动成功，http://127.0.0.1:9999')
})
