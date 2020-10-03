const { Router } = require('express')
const Hotel = require('../models/Hotel')
const router = Router()

router.post('/add', async (req, res) => {
  try {
    const user = await req.user
    const { name, country, city, stars, description, minPrice, maxPrice } = req.body
    const hotel = new Hotel({name, location: {country, city}, stars, description, minPrice, maxPrice, userId: user._id})
    await hotel.save()
    res.status(200).json({message: '123'})
  } catch (e) {
    res.status(500).json({message: 'Server error. Try again!'})
    console.log(`Server error. Hotel endpoint -> ${e}`)
  }
})
router.post('/', async (req, res) => {
  try {
    const { id } = req.body
    const hotels = await Hotel.find({userId: id}).populate('location.city location.country')
    res.status(200).json({data: hotels})
  } catch (e) {
    res.status(500).json({message: 'Server Error'})
    console.log(`Server Error: ${e}`)
  }
})

module.exports = router