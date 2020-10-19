import {
  REPRESENTATIVE_INPUT_CHANGE,
  REPRESENTATIVE_LOAD_COUNTRY,
  REPRESENTATIVE_LOADING_HOTEL_BY_ID,
  REPRESENTATIVE_LOADING_HOTELS,
  REPRESENTATIVE_RESET_FORM,
  REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY, REPRESENTATIVE_SELECT_PROPERTY_TYPE, REPRESENTATIVE_CHECKBOX_CHANGE, REPRESENTATIVE_CHECKBOX_CHANGE_SHARING, REPRESENTATIVE_SELECT_CHANGE, REPRESENTATIVE_SELECT_ACCOMMODATION
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
  selectedHotel: {},
  addRooms: {
    children: false,
    sharing: false,
    roomType: '',
    accommodationType: '',
    determ: {},
    description: '',
    price: 0,
    priceChildren: 0,
    countRoom: 0
  }
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
    case REPRESENTATIVE_CHECKBOX_CHANGE:
      return { ...state, addRooms: {...state.addRooms, children: !state.addRooms.children} }
    case REPRESENTATIVE_CHECKBOX_CHANGE_SHARING:
      return { ...state, addRooms: {...state.addRooms, sharing: !state.addRooms.sharing} }
    case REPRESENTATIVE_SELECT_CHANGE:
      return { ...state, addRooms: {...state.addRooms, [action.payload.name]: action.payload.value} }
    case REPRESENTATIVE_SELECT_ACCOMMODATION: 
      return { ...state, addRooms: {...state.addRooms, determ: action.payload} }
    default:
      return state
  }
}