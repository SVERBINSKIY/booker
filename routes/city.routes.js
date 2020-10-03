const { Router } = require('express')
const Country = require('../models/Country')
const City = require('../models/City')
const router = Router()

router.post('/add', async (req, res) => {
  try {
    const {countyCode, city} = req.body
    const countryCandidate = await Country.findOne({code: countyCode})
    const candidateCity = new City({name: city, countryId: countryCandidate._id})
    await candidateCity.save()
    res.status(200).json({message: 'success'})
  } catch (e) {
    res.status(500).json({message: 'Error'})
    console.log(`Error: ${e}`)
  }
})

router.post('/', async (req, res) => {
  try {
    const { country } = req.body
    const candidate = await City.find({countryId: country})
    res.status(200).json({status: 'success', data: candidate})
  } catch (e) {
    res.status(500).json({message: 'Error'})
    console.log(`Error: ${e}`)
  }
})

module.exports = router