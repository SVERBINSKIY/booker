import { distributionDetermening } from './determPeople.utils'

export function defenitionOfAccommodation(countBed) {
  let count = +countBed
  console.log(typeof count)
  let satisfacrotyAccommodationTypes = []
  const data = distributionDetermening()
  for (let i = 0; i < data.length; i++) {
    if (data[i].totalBedCount === count) {
      satisfacrotyAccommodationTypes = [
        ...satisfacrotyAccommodationTypes,
        data[i],
      ]
    }
  }
  return satisfacrotyAccommodationTypes
}
