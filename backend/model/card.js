const mongoose = require('mongoose')
const { Schema } = mongoose;

const cardSchema = new Schema({

    brand : {
        type: String,
        required: true,
    },
    cardNumber : {
        type: String,
        required: true,
        unique: true
    },
    exp : {
        type: Date,
        required: true,
    },
    pin: {
        type: String,
        required: true,
        unique: true
    },
    id: {
        type: String,
        required: true
    },
    cardType: {
        type:  String,
        required : true
    },
    country : {
        type: String,
        required : true
    },
    bank: {
        type: String,
        required : true
    },
    code: {
        type: String,
        required : true
    }
})

const amountSchema = new Schema({
    amount : {
        type: String
    },
    id: {
        type: String,
    }
})

const accountSchema = new Schema({
    accountName : {
        type: String
    },
    accountNumber: {
        type: String,
    },
    bankID : {
        type : String
    },
    id : {
        type: String
    }
})

const Card = mongoose.model('cardModel', cardSchema);
const Amnt = mongoose.model('account', amountSchema);
const Acct = mongoose.model('beneficiary', accountSchema)

module.exports = { Card, Amnt, Acct }