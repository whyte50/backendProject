const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const app = express();

const http = require('http');
const cookie = require('cookie-parser');

const crypto = require('crypto');
const key = crypto.randomBytes(32)
const branca = require('branca')(key);

app.use(cookie())

const User = require('../model/user')
const auth = require('../middleware/auth')

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body
    try {
        // HASH PASSWORD
        const value = 8
        const encryptedPassword = await bcrypt.hash(password, value)

        // CREATE TOKEN)
        const token = branca.encode(email)

        // SESSIONDATA
        const sessionData = uuid.v4()

        // CONFIRM USER DOES NOT ALREADY EXIST
        const existingUser = await User.findOne({ email });

        if (existingUser) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        // SAVE USER TO MONGODB
        const user = await User.create({
            username,
            email,
            password : encryptedPassword,
            token,
            sessionData
        });

        res.status(404).json(user)
        console.log(user)
    } catch (error) {
        console.log(error)
        res.send('failed')
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        // VALIDATE USER 
        if(!(email && password)){
            res.status(403).send('Invalid email or password')
        }
        // CONFIRM USER DOES EXIST
        const user = await User.findOne({ email });
        const validPassword = await bcrypt.compare(password, user.password)
        if(user && validPassword){
            // CREATE TOKEN
            const token = branca.encode(email)
            user.token = token;
            
            // res.setHeader('x-access-token', token);
            res.cookie('token' , token);

        };

        return res.status(200).json(user)

    } catch (error) {
        console.log(error)
        res.status(400).send({ error })
    }
})

router.get('/home', auth, (req, res) => {
    res.send({ welcome : "welcome authorized user"})
})

router.post('/logout', (req, res) => {
    res.clearCookie('token')
    console.log('logged out')
})

module.exports = router;
