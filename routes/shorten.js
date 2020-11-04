const express = require('express')
const mongoose = require('mongoose')
Url = require('../models/Urls')
var Schema = mongoose.Schema

const router = express.Router()
router.get('/test', (req, res) =>
  console.log('we got to the test route!')
)

router.post('/', (req, res) => {
  if (req.body.url) {
    var urlData = req.body.url
    Url.findOne({url: urlData}, (err, doc) => {
      if (doc) {
        console.log('entry found')
      } else {
        console.log('new url')
      }
    })
  }

})

module.exports = router
