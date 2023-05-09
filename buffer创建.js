/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
// alloc会把内存清零
let buf = Buffer.alloc(10);
console.log(buf);

// allocUnsafe不会把内存清零，速度快
let buf2 = Buffer.allocUnsafe(10);
console.log(buf2);

// from可以将值转换为buffer
let buf3 = Buffer.from('hello');
let buf4 = Buffer.from([10, 2, 3]);
console.log(buf3);
console.log(buf4);
