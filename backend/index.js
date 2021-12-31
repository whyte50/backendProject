const express = require('express');
const path = require('path');
const cors = require('cors')
const cookieParser = require('cookie-parser');

require('dotenv').config()

require('./config/db')
const router = require('./route/userRoute')
const cardRoute = require('./route/cardRoute')

const app = express()
const PORT = 3000; // default

const pathToViews = path.join(__dirname, 'src/')
app.set('views', pathToViews)

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: 'http://localhost:8080'
}))
app.use('/api', router)
app.use('/payapi',cardRoute)

app.get('/', (req, res) => {
    res.send(`Instance running on PORT ${PORT}`);
})

app.get('/register', (req, res) => {
    res.sendFile(pathToViews + '/signup.html')
})

app.get('/login', (req, res) => {
    res.sendFile(pathToViews + '/login.html')
})

app.listen(PORT, () => console.log(`server running on port ${PORT}, url: http://localhost:3000`))