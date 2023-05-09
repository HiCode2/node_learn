/**
 * @Author: 韩祺涛
 * @Date: 2023/5/6
 * @Project: node
 */
const express = require('express');
const app = express();
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');

app.use(expressSession({
    name: 'sid',
    secret: 'atguigu',
    saveUninitialized: false,
    resave: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/accounts',
    }),
    cookie: {
        httpOnly: true,
        maxAge: 1000 * 60 * 3,
    }
}))
// 登录
app.get('/login' , (req, res) => {
    req.session.username = 'admin';
    req.session.uid = '23jksdf';
    res.send('ok');
});

// session读取
app.get('/cart', (req, res) => {
    if (req.session.username) {
        res.send('欢迎' + req.session.username);
    } else {
        res.send('请登录');
    }
})

// session销毁
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('销毁成功');
    })
})
app.listen(3001, () => {
    console.log('http://127.0.0.1:3001');
})
