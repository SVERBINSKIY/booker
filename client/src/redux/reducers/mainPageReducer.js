import {
  ADD_TO_ADULT, ADD_TO_CHILDREN,
  ADD_TO_ROOM,
  HIDE_GUEST_BLOCK, MAIN_PAGE_INPUT_CHANGE, MAIN_PAGE_INPUT_CHANGE_FOR_EMAIL, SET_CHECK_IN, SET_CHECK_OUT,
  SHOW_GUEST_BLOCK,
  TAKE_AWAY_TO_ADULT, TAKE_AWAY_TO_CHILDREN,
  TAKE_AWAY_TO_ROOM
} from '../types'

const initialState = {
  first: {
    guests: 'none',
    rooms: 1,
    adults: 1,
    children: 0,
    where: '',
    checkIn: {},
    checkOut: {}
  },
  second: [
    {
      id: 1,
      title: 'London',
      hotelCount: 3200
    },
    {
      id: 2,
      title: 'New-York',
      hotelCount: 5000
    },
    {
      id: 3,
      title: 'Berlin',
      hotelCount: 4700
    },
    {
      id: 4,
      title: 'Seul',
      hotelCount: 1200
    }
  ],
  third: {
    email: ''
  }
}

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_GUEST_BLOCK:
      return { ...state, first: {...state.first, guests: action.payload } }
    case HIDE_GUEST_BLOCK:
      return { ...state, first: {...state.first, guests: action.payload } }
    case ADD_TO_ROOM:
      return { ...state, first: {...state.first, rooms: state.first.rooms + 1} }
    case TAKE_AWAY_TO_ROOM:
      return { ...state, first: {...state.first, rooms: state.first.rooms - 1} }
    case ADD_TO_ADULT:
      return { ...state, first: {...state.first, adults: state.first.adults + 1} }
    case TAKE_AWAY_TO_ADULT:
      return { ...state, first: {...state.first, adults: state.first.adults - 1} }
    case ADD_TO_CHILDREN:
      return { ...state, first: {...state.first, children: state.first.children + 1} }
    case TAKE_AWAY_TO_CHILDREN:
      return { ...state, first: {...state.first, children: state.first.children - 1} }
    case SET_CHECK_IN:
      return { ...state, first: {...state.first, checkIn: action.payload} }
    case SET_CHECK_OUT:
      return { ...state, first: {...state.first, checkOut: action.payload} }
    case MAIN_PAGE_INPUT_CHANGE:
      return { ...state, first: {...state.first, [action.payload.name]: action.payload.value} }
    case MAIN_PAGE_INPUT_CHANGE_FOR_EMAIL:
      return { ...state, third: {...state.third, email: action.payload} }
    default:
      return state
  }
}