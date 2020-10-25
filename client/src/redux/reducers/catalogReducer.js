import {
  CATALOG_CHANGE_PRICE_RANGE,
  CATALOG_CHANGE_PROPERTY_TYPE_APARTMENT,
  CATALOG_CHANGE_PROPERTY_TYPE_HOTEL,
  CATALOG_LOADING_ALL,
  CATALOG_TO_GRID,
  CATALOG_TO_LIST,
  CATALOG_FILTER_HOTEL,
  CATALOG_FROM_MAIN_PAGE,
} from '../types'

const initialState = {
  fromMainPage: false,
  catalogLayout: 'grid',
  countFindHotels: 0,
  sort: 'toLower',
  hotels: [],
  filterSide: {
    price: { min: 0, max: 250 },
    propertyType: { hotel: true, apartment: true },
  },
  filtered: false,
  filterSearch: null,
  filteredHotel: [],
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_TO_GRID:
      return { ...state, catalogLayout: action.payload }
    case CATALOG_TO_LIST:
      return { ...state, catalogLayout: action.payload }
    case CATALOG_LOADING_ALL:
      return {
        ...state,
        hotels: action.payload.hotels,
        filterSide: { ...state.filterSide, price: action.payload.price },
        filterSearch: { ...state.filterSide, price: action.payload.price },
      }

    case CATALOG_CHANGE_PRICE_RANGE:
      return {
        ...state,
        filterSearch: { ...state.filterSearch, price: action.payload },
        filtered: true,
      }
    case CATALOG_CHANGE_PROPERTY_TYPE_HOTEL:
      return {
        ...state,
        filtered: true,
        filterSide: {
          ...state.filterSide,
          propertyType: {
            ...state.filterSide.propertyType,
            hotel: !state.filterSide.propertyType.hotel,
          },
        },
      }
    case CATALOG_CHANGE_PROPERTY_TYPE_APARTMENT:
      return {
        ...state,
        filtered: true,
        filterSide: {
          ...state.filterSide,
          propertyType: {
            ...state.filterSide.propertyType,
            apartment: !state.filterSide.propertyType.apartment,
          },
        },
      }
    case CATALOG_FILTER_HOTEL:
      return { ...state, filteredHotel: action.payload.hotels }
    case CATALOG_FROM_MAIN_PAGE:
      return {
        ...state,
        fromMainPage: true,
        hotels: action.payload.hotels,
        filterSide: { ...state.filterSide, price: action.payload.price },
        filterSearch: { ...state.filterSide, price: action.payload.price },
      }

    default:
      return state
  }
}
