const { Router } = require('express')
const Room = require('../models/Room')
const Hotel = require('../models/Hotel')
const router = Router()

// /api/rooms/add
router.post('/add', async (req, res) => {
  try {
    const {
      children,
      sharing,
      roomType,
      accommodationType,
      description
    } = req.body
    const { price, priceChildren, countRoom, determ } = req.body
    const { hotelId } = req.body

    const priceAdult = +price
    const priceChild = +priceChildren
    const count = +countRoom

    const candidateHotel = await Hotel.findById(hotelId)
    if (!candidateHotel) {
      res.status(500).json({ warning: 'Erorr Hotel Not Found' })
    }

    for (let i = 0; i < count; i++) {
      const nameCandidate = Date.now().toString()
      const name = nameCandidate.substring(10, 13)
      const room = new Room({
        name,
        children,
        sharing,
        type: roomType,
        accommodation: accommodationType,
        adult: determ.adult,
        children: determ.child,
        extraBed: determ.extraBed,
        description,
        priceAdult,
        priceChild,
        hotelId,
        totalPrice: determ.adult * priceAdult + determ.child * priceChild
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
