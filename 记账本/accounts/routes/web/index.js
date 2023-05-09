var express = require('express');
var router = express.Router();
// const lowdb = require('lowdb');
// const FileSync = require('lowdb/adapters/FileSync');
// const shortid = require('shortid');
// const adapter = new FileSync(__dirname + '../../../dBdata/db.json');
// const db = lowdb(adapter);
const moment = require('moment');
const accountModel = require('../../models/accountModels');
/* GET home page. */
router.get('/account', function (req, res, next) {
    //   const data = db.get('account').value();
    // res.render('list', {data: data})

    // 从数据库中查询数据
    accountModel.find().sort({time: -1}).then(data => {
        res.render('list', {data: data, moment: moment})
    }).catch(err => {
        res.status(500).send(err)
    })
});

router.get('/account/create', (req, res, next) => {
    res.render('create')
})


// 新增记录
router.post('/account', (req, res, next) => {
    // const id = shortid.generate();
    // db.get('account').unshift({id: id, ...req.body}).write();
    // console.log(req);
    // console.log(req.path);
    const data = {
        ...req.body,
        money: Number(req.body.money),
        time: moment(req.body.time).toDate()
    }
    // 插入数据库
    accountModel.create(data).then(data => {
        res.send('ok')
    }).catch(err => {
        res.status(500).send(err)
    })
})

// 删除记录
router.get('/account/:id', (req, res, next) => {
    // db.get('account').remove({id: req.params.id}).write();
    // res.render('list', {data: db.get('account').value()})
    const _id = req.params.id;
    accountModel.deleteOne({_id: _id}).then(data => {
        accountModel.find().sort({time: -1}).then(data => {
            res.render('list', {data: data, moment: moment})
        }).catch(err => {
            res.status(500).send(err)
        })
    }).catch(err => {
        res.status(500).send(err)
    })
})
module.exports = router;
