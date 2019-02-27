const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  title: {
    type: mongoose.SchemaTypes.String,
    default: '- no title yet -',
  },
  content: {
    type: mongoose.SchemaTypes.String,
    default: '- no text added yet -',
  },
  tags: [mongoose.SchemaTypes.String],
  bookmarked: {
    type: mongoose.SchemaTypes.Boolean,
    default: false,
  },
})

module.exports = mongoose.model('Card', CardSchema)
