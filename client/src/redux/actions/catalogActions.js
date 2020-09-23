import { CATALOG_TO_GRID, CATALOG_TO_LIST } from '../types'

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