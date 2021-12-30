const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const app = express();
const cookieparser = require('cookie-parser')

app.use(cookieparser())

const uuid = require('uuid')
const jwt = require('jsonwebtoken')

const key = '41755e12-a663-4c5c-8be8-ac472ea542db'

const User = require('../model/user')
const auth = require('../middleware/auth')

const createToken = (id) => {
    return jwt.sign({ id }, key)
}

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body
    try {

        // CONFIRM USER DOES NOT ALREADY EXIST

        const existingUser = await User.findOne({ email });
        const isUsername = await User.findOne({ username })

        if (existingUser) { return res.status(409).send({ message : "Email Already Exist. Please Login"}) && console.log('Email already exists') }

        else if(password.length < 7) { return res.status(401).send({ message : 'Password must be above 6 characters'}) }

        else if (isUsername) { return res.status(401).send({ message : 'username is taken'}) }

        // SAVE USER TO MONGODB

        await  User.create({
            username,
            email,
            password
        }) 
        .then((user) => {
            token = createToken(user._id)
            res.cookie('token', token)

            res.status(200).json(user)
            console.log(user)
        })

        .catch((err) => {
            console.log(err)
        })

        

    } catch (error) {
        console.log(error)
        res.send('failed')
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body

        // VALIDATE USER 
        if(!(email && password)){
            res.status(403).send('Invalid email or password')
        }
        // CONFIRM USER DOES EXIST
        const user = await User.findOne({ email });
        if(user){
            const authUser = await bcrypt.compare(password, user.password)
            if(authUser){
                token = createToken(user._id)
                res.cookie('token', token)
                res.status(200).json(user)
                return
            } else { return res.status(401).send({ message : 'Incorrect password'}) && console.log('Incorrect password') }
        } else { return res.status(404).send({ message: 'Email does not exist'}) && console.log('Email does not exist') }

})

router.post('/logout', auth, (req, res) => {
    res.clearCookie('token')
    res.send('logged out')
    console.log('logged out')
})

router.get('/auth', (req, res) => {
    const token = req.cookies.token

    if(token) {
        jwt.verify(token, '41755e12-a663-4c5c-8be8-ac472ea542db')
        res.send('success')
    } else {
        return res.status(403).send({Error : "Not Authorized . Please log in"})
    }
})

router.get('/home', auth, (req, res) => {
    res.send({ Success: 'you are autenticated'})
})

module.exports = router;
