export function searchMinMax(data) {
  const priceArray = []
  for (let i = 0; i < data.data.length; i++) {
    priceArray.push(data.data[i].minPrice)
  }
  const min = Math.min.apply(null, priceArray)
  const max = Math.max.apply(null, priceArray)
  return { min, max }
}