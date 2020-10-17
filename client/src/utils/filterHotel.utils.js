export const filterHotel = (prevCatalog, filterSearch = {}, propertyType) => {
    return new Promise((resolve, reject) => {
      const filterPrice = filterSearch === null ? {} : filterSearch.price
        // const prevCatalog = catalogState.hotels
        // const filterPrice = catalogState.filterSearch === null ? {} : catalogState.filterSearch.price
        // const propertyType = catalogState.filterSide.propertyType
        let filterByPropertyType = {}
        if (propertyType.hotel && propertyType.apartment) {
          filterByPropertyType = {hotel: 'hotel', apartment: 'apartments'}
        } else if (propertyType.hotel && !propertyType.apartment) {
          filterByPropertyType = {hotel: 'hotel', apartment: 'null'}
        } else if (!propertyType.hotel && propertyType.apartment) {
          filterByPropertyType = {hotel: 'null', apartment: 'apartments'}
        } else if (!propertyType.hotel && !propertyType.apartment) {
          filterByPropertyType = {hotel: 'null', apartment: 'null'}
        }
    
        let filteredHotels = prevCatalog.filter(hotel => (
          hotel.minPrice >= filterPrice.min && hotel.minPrice <= filterPrice.max && (hotel.propertyType === filterByPropertyType.hotel || hotel.propertyType === filterByPropertyType.apartment )
        ))
        resolve(filteredHotels)
        reject('Error')
    })
  }
  