import {
  REPRESENTATIVE_INPUT_CHANGE,
  REPRESENTATIVE_LOAD_COUNTRY,
  REPRESENTATIVE_LOADING_HOTEL_BY_ID,
  REPRESENTATIVE_LOADING_HOTELS,
  REPRESENTATIVE_RESET_FORM,
  REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY, REPRESENTATIVE_SELECT_PROPERTY_TYPE
} from '../types'

const initialState = {
  managedHotels: [],
  loadCountry: [],
  loadCity: [],
  addHotel: {
    name: '',
    country: '',
    city: '',
    propertyType: '',
    stars: 0,
    description: '',
    minPrice: 0,
    maxPrice: 0
  },
  selectedHotel: {}
}

export const representativeReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPRESENTATIVE_INPUT_CHANGE:
      return { ...state, addHotel: { ...state.addHotel, [action.payload.name]: action.payload.value } }
    case REPRESENTATIVE_LOAD_COUNTRY:
      return { ...state, loadCountry:  action.payload}
    case REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY:
      return {
        ...state,
        addHotel: {
          ...state.addHotel, [action.payload.name]: action.payload.value
        },
        loadCity: action.payload.city
      }
    case REPRESENTATIVE_RESET_FORM:
      return {
        ...state,
        addHotel: {
          ...state.addHotel, name: '', description: '', minPrice: 0, stars: 0, maxPrice: 0, country: '', city: ''
        }
      }
    case REPRESENTATIVE_LOADING_HOTELS:
      return { ...state, managedHotels: action.payload }
    case REPRESENTATIVE_LOADING_HOTEL_BY_ID:
      return { ...state, selectedHotel: action.payload }
    case REPRESENTATIVE_SELECT_PROPERTY_TYPE:
      return { ...state, addHotel: {...state.addHotel, [action.payload.name]: action.payload.value} }
    default:
      return state
  }
}