const express = require('express')
const { Card, Amnt, Acct } = require('../model/card')
const auth = require('../middleware/auth')

const paystack = require('paystack-api')(process.env.secret_key)
const getJSON = require('get-json')

const { Router } = express;

const router = Router()

router.post('/card', (req, res) => {
    const { cardNumber, exp, id } = req.body

        const BIN = cardNumber.slice(0, 6)

        const data = paystack.verification.resolveBIN({ bin : BIN })
        const pat = data.uri.href
        try {

            getJSON(pat, async (err, data) => {
                if(data) {
                    // CHECK IF CARD ALREADY EXISTS
                    const existingCard = await Card.findOne({ cardNumber });
                    
                    if(existingCard){
                        return res.status(409).send({ message : 'card already exists'}) && console.log('card already exist')
                    }
                    else if(err) { return res.status(409).send({  message: 'Invalid Card Number' }) && console.log('Invalid Card Number')}
    
                    const cardBrand = data.data.brand.toUpperCase()
                    if(cardNumber.length !== 16){
                        throw new Error('Card Lenght Error') &&  res.status(422).send({ message : 'Card Lenght Error'})
                    }
    
                    const card = await Card.create({
                        brand : cardBrand,
                        cardNumber,
                        exp,
                        pin : BIN,
                        id,
                        country : data.data.country_name,
                        bank : data.data.bank,
                        code : data.data.country_code,
                        cardType : data.data.card_type
                    })
                    return res.status(201).send({ card }) && console.log(data)
                }
            })

        } catch(err) {
            console.log(err)
        }

})

router.get('/cards/:id', async (req, res) => {
    const docs = await Card.find({ id: req.params.id})
    res.send(docs)  
})

router.get('/card/:id', async (req, res) => {
    const docs = await Card.find({ _id: req.params.id})
    res.send(docs)  
})

router.get('/cards/delete/:id', async (req, res) => {
    await Card.deleteOne({ id : req.params.id})
    .then((docs) => {
        res.send(docs)
    })
    .catch((err) => {
        console.log(err)
    })
})

router.post('/send/email', async (req, res) => {
    const { email, amount } = req.body
    await paystack.transaction.initialize({
        email : email,
        amount: amount
    })
    .then((response) => {
        res.redirect(response.data.authorization_url)
    }) .catch((err) => {
        console.log(err)
    })
})

router.get('/amount/:id', async (req, res) => {
    await Amnt.findOne({ id: req.params.id })
    .then((amount) => res.json(amount))
})

router.get('/account/code_list', async (req, res) => {
    await paystack.misc.list_banks()
    .then((response) => res.send(response))
})

router.post('/account/benefit', async (req, res) => {
    const { accountName, accountNumber, bankID, id } = req.body
    await Acct.create({
        accountName,
        accountNumber,
        bankID,
        id
    }).then((response) => {
        res.json(response)
    })
})

module.exports = router