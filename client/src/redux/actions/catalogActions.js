import { CATALOG_LOADING_ALL, CATALOG_TO_GRID, CATALOG_TO_LIST } from '../types'
import { hideLoader, showLoader } from './appActions'

export function catalogToGrid(layout) {
  return {
    type: CATALOG_TO_GRID,
    payload: layout
  }
}
export function catalogToList(layout) {
  return {
    type: CATALOG_TO_LIST,
    payload: layout
  }
}
export function handleGetAllHotels() {
  return async dispatch => {
    dispatch(showLoader())
    const request = await fetch('/api/hotel/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await request.json()
    dispatch({ type: CATALOG_LOADING_ALL, payload: data.data })
    dispatch(hideLoader())
  }
}