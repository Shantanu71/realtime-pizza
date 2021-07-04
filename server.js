const express = require('express')
const ejs = require('ejs')
const path = require('path')
const expressLayout = require('express-ejs-layouts')


const app = express()
const PORT = process.env.PORT || 3300

// Assets
app.use(express.static('public'))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('home'))
app.get('/cart', (req, res) => res.render('customers/cart'))


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
