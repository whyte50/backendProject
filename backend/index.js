const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

require('./config/db')
const ROUTER = require('./route/userRoute')

const app = express()
const PORT = 3000; // default

const pathToViews = path.join(__dirname, 'src/')
app.set('views', pathToViews)

app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(cookieParser())
app.use(ROUTER)

app.get('/', (req, res) => {
    res.cookie('port', PORT)
    res.send(`Instance running on PORT ${PORT}`);
})

app.get('/register', (req, res) => {
    res.sendFile(pathToViews + '/signup.html')
})

app.get('/login', (req, res) => {
    res.sendFile(pathToViews + '/login.html')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))