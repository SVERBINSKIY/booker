const { Schema, model } = require('mongoose')

const accommodationSchema = new Schema({
    children: { type: Boolean, default: false, required: true },
    sharing: { type: Boolean, default: false, required: true },
    type: { type: String, required: true }
})

module.exports = model('Accomodation', accommodationSchema)