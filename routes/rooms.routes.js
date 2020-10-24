const { Router } = require('express')
const Room = require('../models/Room')
const Hotel = require('../models/Hotel')
const router = Router()

async function getHotelsFromRooms(candidate) {
  try {
    let hotelsId = []
    for (let i = 0; i < candidate.length; i++) {
      hotelsId = [...hotelsId, candidate[i].hotelId.toString()]
    }
    const filteredHotelsId = hotelsId.filter((item, pos) => {
      return hotelsId.indexOf(item) == pos
    })

    let hotels = []
    for (let i = 0; i < filteredHotelsId.length; i++) {
      hotels = [
        ...hotels,
        await Hotel.findById(filteredHotelsId[i]).populate(
          'location.city location.country'
        ),
      ]
    }
    return hotels
  } catch (e) {
    console.log(`Function Error: ${e}`)
  }
}
function getHotelsFilteredByWhere(hotelsFromRoom, where) {
  let filteredHoteByWhere = []
  for (let i = 0; i < hotelsFromRoom.length; i++) {
    if (
      hotelsFromRoom[i].location.city.name === where ||
      hotelsFromRoom[i].location.country.name === where
    ) {
      filteredHoteByWhere = [...filteredHoteByWhere, hotelsFromRoom[i]]
    }
  }
  return filteredHoteByWhere
}

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

// /api/rooms/get-hotel
router.post('/get-hotel', async (req, res) => {
  try {
    const form = req.body
    let hotels = []
    const candidate = await Room.find({
      bedCount: form.totalBedCount,
    })

    const hotelsFromRoom = await getHotelsFromRooms(candidate)
    let roomsCandidate = []

    if (form.where.length !== 0) {
      hotels = getHotelsFilteredByWhere(hotelsFromRoom, form.where.trim())
    }
    for (let i = 0; i < candidate.length; i++) {
      for (let j = 0; j < hotels.length; j++) {
        if (candidate[i].hotelId == hotels[j]._id.toString()) {
          roomsCandidate = [...roomsCandidate, candidate[i]]
        }
      }
    }

    res.status(200).json({
      status: 'success',
      data: {
        hotels: hotels.length !== 0 ? hotels : hotelsFromRoom,
        rooms: roomsCandidate,
      },
    })
  } catch (e) {
    res.status(500).json({ message: `Server Error: ${e}` })
    console.log(`Server Error: ${e}`)
  }
})

module.exports = router
