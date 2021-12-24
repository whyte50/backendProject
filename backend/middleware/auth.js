// const crypto = require('crypto');
// const key = crypto.randomBytes(32)
const branca =  require('branca');

const cookieParser = require('cookie-parser')
const express = require('express')

const app = express();
app.use(cookieParser())

const verifyUser = (req, res, next) => {
    try{
        // const token = req.header('x-access-token')
        const token = req.cookies.token

        if(!token) {
                console.log(token)
                return res.status(403).send({Error : "Not Authorized . Please log in"})
        }

        const decoded = branca.decode(token)
        req.user = decoded

        console.log('success, you are verified')

    }catch (e) {
        // console.log(e)
    }
    return next()
}

module.exports = verifyUser