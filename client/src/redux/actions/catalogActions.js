import {
  CATALOG_CHANGE_PRICE_RANGE,
  CATALOG_CHANGE_PROPERTY_TYPE_APARTMENT,
  CATALOG_CHANGE_PROPERTY_TYPE_HOTEL,
  CATALOG_LOADING_ALL,
  CATALOG_TO_GRID,
  CATALOG_TO_LIST,
  CATALOG_FILTER_HOTEL,
  CATALOG_SET_FILTERED,
  CATALOG_UNSET_FILTERED,
} from "../types"
import { hideLoader, showLoader } from "./appActions"
import { searchMinMax } from "../../utils/searchMinMax.utils"
import { filterHotel } from "../../utils/filterHotel.utils"

export function handleSetFiltered() {
  return { type: CATALOG_SET_FILTERED }
}
export function handleUnsetFiltered() {
  return { type: CATALOG_UNSET_FILTERED }
}

export function catalogToGrid(layout) {
  return {
    type: CATALOG_TO_GRID,
    payload: layout,
  }
}
export function catalogToList(layout) {
  return {
    type: CATALOG_TO_LIST,
    payload: layout,
  }
}
export function handleGetAllHotels() {
  return async (dispatch) => {
    dispatch(showLoader())
    const request = await fetch("/api/hotel/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data = await request.json()
    const { min, max } = searchMinMax(data)
    dispatch({
      type: CATALOG_LOADING_ALL,
      payload: { hotels: data.data, price: { min, max } },
    })
    dispatch(hideLoader())
  }
}

export function handlePriceRangeChange(min, max) {
  return (dispatch) => {
    dispatch({ type: CATALOG_CHANGE_PRICE_RANGE, payload: { min, max } })
  }
}
export function handleSetPropertyTypeChange(name) {
  return (dispatch) => {
    if (name === "hotel") {
      dispatch({ type: CATALOG_CHANGE_PROPERTY_TYPE_HOTEL })
    } else if (name === "apartment") {
      dispatch({ type: CATALOG_CHANGE_PROPERTY_TYPE_APARTMENT })
    }
  }
}

export function handleFilterHotel(prevCatalog, filterPrice = {}, propertyType) {
  return async (dispatch) => {
    const filteredHotel = await filterHotel(
      prevCatalog,
      filterPrice,
      propertyType
    )
    console.log(filteredHotel)
    dispatch({ type: CATALOG_FILTER_HOTEL, payload: { hotels: filteredHotel } })
  }
}
