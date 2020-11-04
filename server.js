const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const router = express.Router()
const app = express()

URL = require('./models/Urls')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Listening now!'))

const shorten = require("./routes/shorten")
app.use("/api/shorten", shorten)

const redirect = require("./routes/redirect")
app.use("/api/redirect", redirect)

const db = require('./keys').mongoURI
mongoose.connect(db)
