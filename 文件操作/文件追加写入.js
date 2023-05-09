/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 追加写入文件 (异步)
fs.appendFile('./test.txt', ',世界', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('写入成功');
    }
)

// 追加写入文件 (同步)
fs.appendFileSync('./test.txt', '\r\n你好，世界', err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('写入成功');
    }
)

// 使用writeFile实现追加写入
fs.writeFile('./test.txt', ',世界', {flag: 'a'}, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('写入成功');
    }
)
