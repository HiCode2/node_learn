const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    time: Date,
    type: {
        type: Number,
        default: -1
    },
    money: {
        type: Number,
        required: true,
    },
    remark: {
        type: String,
    }
})

const accountModel = mongoose.model('accounts', accountSchema)

module.exports = accountModel
