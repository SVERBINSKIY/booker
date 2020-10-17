const { Schema, model } = require('mongoose')

const hotelSchema = new Schema({
  name: { type: String, required: true },
  location: {
    country: { type: Schema.Types.ObjectId, ref: 'Country' },
    city: { type: Schema.Types.ObjectId, ref: 'City' }
  },
  stars: { type: Number, required: true, default: 0 },
  propertyType: { type: String, required: true, default: 'hotel' },
  description: { type: String, required: false },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  mainImg: { type: String, required: false },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = model('Hotel', hotelSchema)