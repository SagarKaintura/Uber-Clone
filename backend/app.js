const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
connectDb();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())




app.use('/users', userRoutes)




module.exports = app;