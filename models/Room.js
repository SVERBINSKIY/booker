const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    name: { type: String, required: true },
    children: { type: Boolean, required: true, default: false },
    sharing: { type: Boolean, required: true, default: false },
    type: { type: String, required: true },
    accommodation: { type: String, required: true },
    price: { type: Number, required: true },
    hotelId: { type: Schema.Types.ObjectId, ref: 'Hotel' }
})

module.exports = model('Room', roomSchema)