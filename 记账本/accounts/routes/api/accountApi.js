var express = require('express');
var router = express.Router();
const moment = require('moment');
const accountModel = require('../../models/accountModels');
// 获取所有列表数据
router.get('/account', function (req, res, next) {
    // 从数据库中查询数据
    accountModel.find().sort({time: -1}).then(data => {
        res.json({
            code: '0000',
            message: '查询成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '0001',
            message: '查询失败',
            data: err
        })
    })
});

// 获取单个数据
router.get('/account/:id', function (req, res) {
    const _id = req.params.id
    accountModel.findById(_id).then(data => {
        res.json({
            code: '0000',
            message: '查询成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '0001',
            message: '查询失败',
            data: err
        })
    })
})

// 新增记录
router.post('/account', (req, res, next) => {
    const data = {
        ...req.body,
        money: Number(req.body.money),
        time: moment(req.body.time).toDate()
    }
    // 插入数据库
    accountModel.create(data).then(data => {
        res.json({
            code: '0000',
            message: '新增成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '0001',
            message: '新增失败',
            data: err
        })
    })
})

//更新单个账单数据
router.patch('/account/:id', (req, res) => {
    const {id} = req.params
    accountModel.updateOne({_id: id}, req.body).then(data => {
        res.json({
            code: '0000',
            message: '更新成功',
            data: data
        })
    }).catch(err => {
        res.json({
            code: '0001',
            message: '更新失败',
            data: err
        })
    })
})

// 删除记录
router.delete('/account/:id', (req, res, next) => {
    const _id = req.params.id;
    accountModel.deleteOne({_id: _id}).then(data => {
        res.json({
            code: '0000',
            message: '删除成功',
        })
    }).catch(err => {
        res.json({
            code: '0001',
            message: '删除失败',
            data: err
        })
    })
})
module.exports = router;
