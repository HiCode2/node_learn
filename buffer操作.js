/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
// buffer字符串转换
let buf = Buffer.from([105,108,111,118,101,121,111,117]);
console.log(buf);
console.log(buf.toString()); // 默认utf8

// buffer读写
let buf2 = Buffer.from('hello');
console.log(buf2[0]);
console.log(buf2[0].toString(2));
buf2[0] = 95;
console.log(buf2.toString());

// 溢出
let buf3 = Buffer.from('hello');
buf3[0] = 256; // 最高255位，超出的会舍弃高位的数字
console.log(buf3);

// 中文
let buf4 = Buffer.from('你好');
console.log(buf4);
