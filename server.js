const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())

const router = express.Router()


URL = require('./models/Urls')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.get('/', (req, res, next) => {
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

app.get('/:hash', (req, res, next) => {
  const id = req.params.hash
  URL.UrlSchema.findOne({_id: id}, (err, doc) => {
    if (doc) {
      res.redirect('http://' + doc.url)
    } else {
      res.redirect('https://rethink.software/')
    }
    if (err) {
      return
    }
  })
})
