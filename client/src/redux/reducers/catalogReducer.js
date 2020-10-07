import { CATALOG_LOADING_ALL, CATALOG_TO_GRID, CATALOG_TO_LIST } from '../types'

const initialState = {
  catalogLayout: 'grid',
  countFindHotels: 0,
  sort: 'toLower',
  hotels: []
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_TO_GRID:
      return {...state, catalogLayout: action.payload}
    case CATALOG_TO_LIST:
      return {...state, catalogLayout: action.payload}
    case CATALOG_LOADING_ALL:
      return { ...state, hotels: action.payload }
    default: return state
  }
}