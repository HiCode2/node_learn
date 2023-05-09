/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 方法一: readFile
let data = fs.readFileSync('./test.txt', 'utf-8');
fs.writeFileSync('./test1.txt', data);

// 方法二: 流式操作
let rs = fs.createReadStream('./test.txt');
let ws = fs.createWriteStream('./test3.txt');
rs.on('data', (chunk) => {
        ws.write(chunk);
    }
)
