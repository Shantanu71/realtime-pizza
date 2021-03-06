require('dotenv').config()
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('express-flash')
const MongoDbStore = require('connect-mongo')(session)


const app = express()
const PORT = process.env.PORT || 3300

// Database connection
const url = 'mongodb://localhost/realTimePizza'
mongoose.connect(url, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Database connected...')
}).catch(err => {
    console.log('Connection failed...')
})

// Session store
const mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})

// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 hour
}))

app.use(flash())

// Assets
app.use(express.static('public'))
app.use(express.json())

// Global middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    // res.locals.user = req.user
    next()
})

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)





app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
