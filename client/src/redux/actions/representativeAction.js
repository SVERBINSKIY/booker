import {
  REPRESENTATIVE_INPUT_CHANGE,
  REPRESENTATIVE_LOAD_COUNTRY,
  REPRESENTATIVE_LOADING_HOTEL_BY_ID,
  REPRESENTATIVE_LOADING_HOTELS,
  REPRESENTATIVE_RESET_FORM,
  REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY,
  REPRESENTATIVE_SELECT_PROPERTY_TYPE,
  REPRESENTATIVE_INPUT_TEXT_CHANGE,
  REPRESENTATIVE_INPUT_NUMBER_CHANGE,
  REPRESENTATIVE_INPUT_BED_COUNT_CHANGE,
  REPRESENTATIVE_CLEAR_FORM_ADD_ROOMS,
} from '../types'
import { hideLoader, showLoader } from './appActions'

export function handleInputChange(name, value) {
  return {
    type: REPRESENTATIVE_INPUT_CHANGE,
    payload: { name, value },
  }
}
export function handleSelectPropertyTypeChange(name, value) {
  return {
    type: REPRESENTATIVE_SELECT_PROPERTY_TYPE,
    payload: { name, value },
  }
}
export function handleLoadCountry() {
  return async (dispatch) => {
    const request = await fetch('/api/country', {
      method: 'GET',
    })
    const data = await request.json()
    if (data.data.length) {
      dispatch({ type: REPRESENTATIVE_LOAD_COUNTRY, payload: data.data })
    }
  }
}
export function handleSelectCountry(name, value) {
  return async (dispatch) => {
    const body = JSON.stringify({ [name]: value })
    const request = await fetch('/api/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    const data = await request.json()
    dispatch({
      type: REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY,
      payload: { name, value, city: data.data },
    })
  }
}
export function handleAddHotel(formData) {
  return async (dispatch) => {
    try {
      const request = await fetch('/api/hotel/add', {
        mode: 'no-cors',
        method: 'POST',
        body: formData,
      })
      const data = await request.json()
      console.log(data.message)
      dispatch({ type: REPRESENTATIVE_RESET_FORM })
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }
}

export function handleLoadingHotels(id) {
  return async (dispatch) => {
    dispatch(showLoader())
    const body = JSON.stringify({ id })
    const request = await fetch('/api/hotel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    const data = await request.json()
    dispatch({ type: REPRESENTATIVE_LOADING_HOTELS, payload: data.data })
    dispatch(hideLoader())
  }
}
export function handleLoadingHotelById(id) {
  return async (dispatch) => {
    dispatch(showLoader())
    const request = await fetch(`/api/hotel/open/${id}`, {
      method: 'GET',
    })
    const data = await request.json()
    dispatch({ type: REPRESENTATIVE_LOADING_HOTEL_BY_ID, payload: data.data })
    dispatch(hideLoader())
  }
}

export function handleInputText(name, value) {
  return (dispatch) => {
    dispatch({
      type: REPRESENTATIVE_INPUT_TEXT_CHANGE,
      payload: { name, value },
    })
  }
}
export function handleInputNumber(name, value) {
  return (dispatch) => {
    dispatch({
      type: REPRESENTATIVE_INPUT_NUMBER_CHANGE,
      payload: { name, value },
    })
  }
}
export function handleInputBedCount(name, value, hotels) {
  return (dispatch) => {
    dispatch({
      type: REPRESENTATIVE_INPUT_BED_COUNT_CHANGE,
      payload: { name, value, accommodationTypes: hotels },
    })
  }
}
export function handleButtonAddRooms(form) {
  return async (dispatch) => {
    const body = JSON.stringify(form)
    const request = await fetch('/api/rooms/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    })
    const data = await request.json()
    data.status === 'Success'
      ? dispatch({ type: REPRESENTATIVE_CLEAR_FORM_ADD_ROOMS })
      : console.log(11)
    console.log(data)
  }
}
