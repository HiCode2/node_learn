/**
 * @Author: 韩祺涛
 * @Date: 2023-04-20
 * @Project: node
 */
const fs = require('fs');
const path = require('path');


// resolve
console.log(__dirname); // D:\node
path.resolve(__dirname, 'test.txt'); // D:\node\test.txt
path.resolve(__dirname,'./test.txt'); // D:\node\test.txt

// sep 分隔符
console.log(path.sep); // \

// parse 解析路径，获取路径相关信息
console.log(__filename); // D:\node\path模块.js       // 文件绝对路径
console.log(path.parse(__filename)); // { root: 'D:\\', dir: 'D:\\node', base: 'path模块.js', ext: '.js', name: 'path模块' }

// basename 获取文件名
console.log(path.basename(__filename)); // path模块.js

// dirname 获取文件所在目录
console.log(path.dirname(__filename)); // D:\node

// extname 获取文件扩展名
console.log(path.extname(__filename)); // .js
