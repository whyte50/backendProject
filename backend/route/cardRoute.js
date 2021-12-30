const express = require('express')
const { Card, Amnt } = require('../model/card')
const auth = require('../middleware/auth')

const { Router } = express;

const router = Router()

router.post('/card', async (req, res) => {
    const { cardType, cardNumber, exp, pin, id } = req.body
    try{

        // CHECK IF CARD ALREADY EXISTS
        const existingCard = await Card.findOne({ cardNumber });
        const exPIN = await Card.findOne({ pin })
        if(existingCard){
            return res.status(409).send({ message : 'card already exists'}) && console.log('card already exist')
        } else if (exPIN) { return res.status(409).send({ message : 'Pin Error' }) && console.log('Pin Error') }
        else if(pin.length !== 3) { return res.status(409).send({ message: 'pin lenght error' }) && console.log('pin legnth error')}

        const cardtype = cardType.toUpperCase()
        if(cardNumber.length !== 16 || pin.length !== 3){
            throw new Error('Invalid card') &&  res.status(422).send('Invalid Card Details')
        }

        const card = await Card.create({ cardType : cardtype, cardNumber, exp, pin, id})
        return res.status(201).send({ card })

    }catch(err){
        console.log(err)
    }
})

router.get('/cards/:id', async (req, res) => {
    const docs = await Card.find({ id: req.params.id})
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

module.exports = router