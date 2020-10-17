const { Schema, model } = require('mongoose')

const roomSchema = new Schema({
    name: { type: String, default: Date.now.toString },
    type: { type: String, default: 'STD', required: true },
    accommodation: { type: String, required: true },
    description: { type: String, required: false },    
    price: { type: Number, default: 0, required: true }
})

module.exports = model('Room', roomSchema)