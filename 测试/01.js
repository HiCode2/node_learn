/**
 * @Author: 韩祺涛
 * @Date: 2023-04-26
 * @Project: node
 */
const sz = require('processingarray')
console.log(sz.arrayToHeavy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sz.arrayToHeavyByKey([{name: '张三', age: 18}, {name: '李四', age: 18}, {name: '王五', age: 18},  {name: '王五', age: 18},  {name: '王五', age: 18}, {
    name: '张三',
    age: 18
}], 'name'));
