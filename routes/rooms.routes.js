const { Router } = require('express')
const Room = require('../models/Room')
const Hotel = require('../models/Hotel')
const router = Router()

// /api/rooms/add
router.post('/add', async (req, res) => {
  try {
    const form = req.body
    const candidateHotel = await Hotel.findById(form.hotelId)
    if (!candidateHotel) {
      res.status(500).json({ warning: 'Erorr Hotel Not Found' })
    }

    for (let i = 0; i < form.countRoom; i++) {
      const nameCandidate = Date.now().toString()
      const name = nameCandidate.substring(10, 13)
      const room = new Room({
        name,
        roomType: form.roomType,
        bedCount: form.bedCount,
        accommodationTypes: form.accommodationTypes,
        description: form.description,
        priceAdults: form.priceAdults,
        priceChildren: form.priceChildren,
        hotelId: form.hotelId,
      })
      await room.save()
    }

    res.status(200).json({ status: 'Success' })
  } catch (e) {
    res.status(500).json({ message: 'Server Error' })
    console.log(`Server Error -> ${e}`)
  }
})

module.exports = router
