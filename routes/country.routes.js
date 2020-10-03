const { Router } = require('express')
const Country = require('../models/Country')
const router = Router()

router.post('/add', async (req, res) => {
  try {
    const {name, code} = req.body
    const country = new Country({name, code})
    await country.save()
    res.status(201).json({message: 'success'})
  } catch (e) {
    res.status(500).json({message: 'Error'})
    console.log(`Error: ${e}`)
  }
})
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find()
    res.status(200).json({data: countries})
  } catch (e) {
    res.status(500).json({message: 'Error'})
    console.log(`Error: ${e}`)
  }
})

module.exports = router
