const key = '41755e12-a663-4c5c-8be8-ac472ea542db'
const jwt =  require('jsonwebtoken');

const cookieParser = require('cookie-parser')
const express = require('express')

const app = express();
app.use(cookieParser())

const verifyUser = (req, res, next) => {

        const token = req.cookies.token

        if(token) {
            jwt.verify(token, key, (err, decodedToken) => {
                if(err) {
                    console.log(err)
                    res.redirect('http://localhost:8080/login')
                } else{
                    console.log(decodedToken)
                    next()
                }
            })
            
        } else {
            return res.status(403).send({Error : "Not Authorized . Please log in"})
        }
}

module.exports = verifyUser