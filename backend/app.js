const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const cors = require('cors')
const connectDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const cookieParser = require('cookie-parser')
connectDb();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())


app.get('/',(res, req)=>{
  res.send('express server service')
})

app.use('/users', userRoutes)

app.use('/captain',captainRoutes)


module.exports = app;