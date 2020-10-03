const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatarImg: { type: String, required: false },
  isRepresentative: { type: Boolean, required: true, default: false }
})

module.exports = model('User', userSchema)