const mongoose = require('mongoose')

Schema = mongoose.Schema

const UrlSchema = new Schema({
  _id: {type: String},
  url: {type: String, required: true},
  hash: {type: String}
})

exports.UrlSchema = mongoose.model("Url", UrlSchema)
