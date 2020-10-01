const { Router } = require('express')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const router = Router()

// /api/sign/up
router.post(
  '/up',
  [],
  async (req, res) => {
    try {
      const {name, email, password} = req.body
      const candidate = await User.findOne({email})
      if (candidate) {
        return res.status(400).json({message: 'this user already exists'})
      }
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({name, email, password: hashedPassword})
      await user.save()
      res.status(200).json({status: 'success'})

    } catch (e) {
      res.status(500).json({message: 'Sever error. Try again!'})
      console.log(`Error! Register endpoint -> ${e.message}`)
    }
  }
)

// /api/sign/in
router.post(
  '/in',
  [],
  async(req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({email})
      if (!user) {
        return res.status(400).json({message: 'No such user exists'})
      }
      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) {
        return res.status(400).json({message: 'Incorrect password'})
      }
      const token = jwt.sign({userId: user.id}, config.get('jwtSecretKey'), {expiresIn: '1h'})

      res.status(200).json({status: true, token, userId: user.id})
    } catch (e) {
      res.status(500).json({message: 'Server error. Try again!'})
      console.log(`Error! Login endpoint -> ${e.message}`)
    }
  }
)

module.exports = router