const { Schema, model } = require('mongoose')

const countrySchema = new Schema({
  code: { type: String, required: true },
  name: { type: String, required: true }
})

module.exports = model('Country', countrySchema)