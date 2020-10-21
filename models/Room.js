const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
  name: { type: String, required: true },
  roomType: { type: String, required: true },
  bedCount: { type: Number, required: true },
  accommodationTypes: { type: Array },
  description: { type: String, required: false },
  priceAdults: { type: Number, required: true },
  priceChildren: { type: Number, required: false },
  hotelId: { type: Schema.Types.ObjectId, ref: 'Hotel' },
})

module.exports = model('Room', roomSchema)
