/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 创建读取流对象
const rs = fs.createReadStream('./test.txt');

// 绑定data事件
rs.on('data', data => {
        // 每一次读取的数据都会触发一次data事件
        // 每次读取64kb （65536b）
        console.log(data.toString());
    }
)

// 可选
rs.on('end', () => {
        // 读取完毕
        console.log('读取完毕');
    }
)
