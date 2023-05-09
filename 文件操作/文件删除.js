/**
 * @Author: 韩祺涛
 * @Date: 2023-04-18
 * @Project: node
 */
const fs = require('fs');

// 方法一： unlink
fs.unlink('./test1.txt', (err) => {
        if (err) {
            console.log(err);
        }
})

// 方法二: rm 14.14版本才有
// fs.rm('./test2.txt', (err) => {
//         if (err) {
//             console.log(err);
//         }
// }
// )
