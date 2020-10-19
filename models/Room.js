const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    name: { type: String, required: true },
    children: { type: Boolean, required: true, default: false },
    sharing: { type: Boolean, required: true, default: false },
    type: { type: String, required: true },
    accommodation: { type: String, required: true },
    adult: { type: Number, required: true },
    children: { type: Number, required: false },
    extraBed: { type: Number, required: false },
    description: { type: String, required: false },
    priceAdult: { type: Number, required: true },
    priceChild: { type: Number, required: false },
    hotelId: { type: Schema.Types.ObjectId, ref: 'Hotel' },
    totalPrice: { type: Number, required: true }
})

module.exports = model('Room', roomSchema)