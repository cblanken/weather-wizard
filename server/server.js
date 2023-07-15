const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const apiRoutes = require('./routes/api')
require('dotenv').config({path: './config/.env'})

// Passport config

require('dotenv').config({path: './config/.env'})

connectDB()

app.set() // asuming it's not app.set('view engine', 'ejs'), not sure what to use for React
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

// Sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'string',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
    }),
  })
);


// Passport middleware
app.use(passport.initialize())
app.use(passport.session())


// routers 

app.use('/', mainRoutes)
app.use('/', apiRoutes)


app.use(flash())

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running on a port ${process.env.PORT}, you better catch it!`)
})  
