export function searchMinMax(data) {
  const priceArray = []
  for (let i = 0; i < data.length; i++) {
    priceArray.push(data[i].minPrice)
  }
  const min = Math.min.apply(null, priceArray)
  const max = Math.max.apply(null, priceArray)
  return { min, max }
}
