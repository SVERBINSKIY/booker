const { Schema, model } = require('mongoose')

const roomTypeSchema = new Schema({
    codeType: { type: String, required: true },
    nameType: { type: String, required: true }
})

module.exports = model('RoomType', roomTypeSchema)