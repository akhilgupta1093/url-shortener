const express = require('express')

const router = express.Router()


router.get('/test', (req, res) => {
  console.log('finally reached?')
})
// router.get('/', (req, res) => {
//   const hash = req.headers.hash
//   URL.findOne({ _id: hash })
//     .then((doc) => {
//       return res.json({url: doc.url})
//     })
//     .catch((err) => {
//       return res.status(404)
//     })
// })

module.exports = router
