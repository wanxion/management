const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  cover: { type: String },
  describe: { type: String },
  body: { type: String },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Article', schema)
