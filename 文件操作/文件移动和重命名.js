/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 异步重命名
fs.rename('./test.txt', './test_new.txt', (err) => {
        if (err) {
            console.log(err);
        }
    }
)

// 同步重命名
fs.renameSync('./test.txt', './test_new.txt');
