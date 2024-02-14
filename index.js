const express = require('express');
const { mongoose } = require('mongoose')
const { dotenv } = require('dotenv').config()
const app = express();
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')





mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database Connected.'))
.catch(() => console.log('Database not connected.'))




 
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server running on port ${port}`))