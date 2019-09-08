const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String },
  password: {
    type: String,
    select: false,
    set(value) {
      return require('bcryptjs').hashSync(value, 10)
    }
  },
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('AdminUser', schema)
