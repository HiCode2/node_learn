/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
/**
 * 文件流式写入
 */
const fs = require('fs');

// 创建写入流对象
const ws = fs.createWriteStream('./test2.txt');

// 写入
ws.write('你好');
ws.write('\r\n世界');

// 关闭通道
ws.close();
