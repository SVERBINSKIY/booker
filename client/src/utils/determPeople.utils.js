const accommodationTypesArray = [
  'sgl',
  'dbl',
  'trpl',
  'dblShr',
  'trpShr',
  'sglChld',
  'dblChld',
  'sgl2Chld',
  'dbl2Chld',
  'trp2Chld',
]

export function determeningPeople(type) {
  let adult = 0
  let child = 0
  let totalBedCount = 0
  const stringCountAdults = type.substring(0, 3)
  const stringCountChildren = type.substring(3, 4)

  if (stringCountAdults === 'sgl') {
    adult = 1
  } else if (stringCountAdults === 'dbl') {
    adult = 2
  } else if (stringCountAdults === 'trp') {
    adult = 3
  }
  if (stringCountChildren === 'E') {
    child = 1
  } else if (stringCountChildren === '') {
    child = 0
  } else if (stringCountChildren === '2') {
    child = 2
  } else if (stringCountChildren === 'C') {
    child = 1
  }

  totalBedCount = adult + child
  const data = { type, adult, child, totalBedCount }

  return data
}

export function distributionDetermening() {
  let totalTypes = []
  for (let i = 0; i < accommodationTypesArray.length; i++) {
    totalTypes = totalTypes.concat(
      determeningPeople(accommodationTypesArray[i])
    )
  }
  return totalTypes
}
