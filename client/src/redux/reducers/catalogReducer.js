import { CATALOG_TO_GRID, CATALOG_TO_LIST } from '../types'

const initialState = {
  catalogLayout: 'grid',
  countFindHotels: 3,
  sort: 'toLower',
  fromMainPage: {
    where: '',
    checkIn: {
      day: null,
      month: null,
      year: null
    },
    checkOut: {
      day: null,
      month: null,
      year: null
    },
    guest: {
      rooms: null,
      adults: null,
      children: null
    }
  }
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_TO_GRID:
      return {...state, catalogLayout: action.payload}
    case CATALOG_TO_LIST:
      return {...state, catalogLayout: action.payload}
    default: return state
  }
}