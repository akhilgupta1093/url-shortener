const express = require('express')
const mongoose = require('mongoose')
const ShortUniqueId = require('short-unique-id').default
const uid = new ShortUniqueId();
URL = require('../models/Urls')
var Schema = mongoose.Schema
const cors = require('cors')

const router = express.Router()
router.get('/test', (req, res) => {
  console.log(URL)
})

router.post('/', (req, res, next) => {
  console.log('I GOT TO THIS POINT FROM THE FRONTEND')
  if (req.body.url) {
    var urlData = req.body.url
    URL.UrlSchema.findOne({url: urlData}, (err, doc) => {
      if (doc) {
        console.log('entry found')
        res.send({
          url: doc.url,
          hash: doc._id,
          status: 200,
          statusTxt: 'entry found'
        })
      } else {
        console.log('new url')
        var newURL = new URL.UrlSchema ({
          _id: uid(),
          url: urlData
        })
        console.log('new URL initialized')
        newURL.save((error) => {
          console.error(error)
          if (err) {
            return
          } else {
            res.send({
              url: urlData,
              hash: newURL._id,
              status: 200,
              statusTxt: 'new entry created'
            })
          }
        })
      }
    })
  }

})

module.exports = router
