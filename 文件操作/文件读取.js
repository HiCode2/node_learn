/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 异步读取
fs.readFile('./test.txt', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(data.toString());
        }
    }
)

// 同步读取
let data = fs.readFileSync('./test.txt');
console.log(data.toString());
