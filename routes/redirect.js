const express = require('express')
const router = express.Router()
URL = require('../models/Urls')

router.get('/', (req, res, next) => {
  const hash = req.headers.hash
  URL.UrlSchema.findOne({_id: hash})
    .then((doc) => {
      return res.json({url: doc.url})
    })
    .catch((err) => {
      return res.status(400).json({
        error: err
      })
    })
})

module.exports = router
