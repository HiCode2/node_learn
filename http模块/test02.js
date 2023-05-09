/**
 * @Author: 韩祺涛
 * @Date: 2023-04-20
 * @Project: node
 */
const http = require('http');
const server = http.createServer((request, response) => {
    response.end()
})
server.listen(9999, () => {
    console.log('服务启动成功，http://127.0.0.1:9999')
})
