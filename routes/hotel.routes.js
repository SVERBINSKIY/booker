const { Router } = require('express')
const Hotel = require('../models/Hotel')
const Country = require('../models/Country')
const City = require('../models/City')
const router = Router()

router.post('/add', async (req, res) => {
  try {
    const user = await req.user
    const { name, country, city, stars, description, minPrice, maxPrice, propertyType } = req.body
    const file = req.file

    const hotel = new Hotel({
      name,
      location: {
        country,
        city
      },
      stars,
      propertyType,
      description,
      minPrice,
      maxPrice,
      mainImg: file.filename,
      userId: user._id
    })
    console.log('success')

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
router.get('/open/:id', async (req, res) => {
  try {
    const id = req.params.id
    const hotel = await Hotel.findById(id).populate('location.city location.country userId')
    res.status(200).json({data: hotel})
  } catch (e) {
    res.status(500).json({message: 'Server Error'})
    console.log(`Server Error123: ${e}`)
  }
})
router.get('/all', async (req, res) => {
  try {
    const hotels = await Hotel.find().populate('location.country location.city', 'name')
    res.status(200).json({status: 'success', data: hotels})
  } catch (e) {
    res.status(500).json({message: 'Error'})
    console.log(`Error: ${e}`)
  }
})
router.post('/location', async (req, res) => {
  try {
    const { where } = req.body
    const candidate = await City.findOne({name: where}) || await Country.findOne({name: where})
    let place = ''
    let candidateId = ''
    if (candidate.countryId) {
      place = 'city'
      candidateId = candidate._id
    } else if (candidate.code) {
      place = 'country'
      candidateId = candidate._id
    }
    const hotels = await Hotel.find({ [`location.${place}`]: candidateId }).populate('location.country location.city', 'name')

    res.status(200).json({data: hotels})
  } catch (e) {
    res.status(500).json({message: e})
    console.log(`Error: ${e}`)
  }
})

module.exports = router