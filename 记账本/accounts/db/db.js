module.exports = function (success, error) {
    if (typeof error !== "function") {
        error = function() {
            console.log('连接失败');
        }
    }
    const mongoose= require('mongoose');
    const config = require('../config');

    mongoose.set('strictQuery', true);

    mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/${config.dbName}`);

    mongoose.connection.on('open', () => {
        success();
        console.log('连接成功');
    })
    mongoose.connection.on('error', () => {
        console.log('连接失败');
    })
    mongoose.connection.on('close', () => {
        console.log('连接关闭');
    })
}