const User = require('../models/User')

module.exports = async function(req, res, next) {
  if (!req.session.user) {
    return next()
  }
  try {
    const decoded = await User.findById(req.session.user._id)
    req.user = decoded
    next()

  } catch (e) {
    console.log(`Error: ${e}`)
  }
}