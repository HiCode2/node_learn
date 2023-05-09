/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
/**
 * 新建一个文件，并写入内容
 * */
// 导入fs模块
const fs = require('fs');

// 写入文件 (异步)
// writeFile(file文件名, data待写入的数据, options（可选，选项设置）, callback写入回调)
fs.writeFile('./test.txt', '你好', err => {
    // err为null表示写入成功
    if (err) {
        console.log(err);
        return;
    }
});

// 写入文件 (同步)
// fs.writeFileSync('./test2.txt', '你好', err => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// });
