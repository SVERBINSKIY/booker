import {
  REPRESENTATIVE_INPUT_CHANGE,
  REPRESENTATIVE_LOAD_COUNTRY,
  REPRESENTATIVE_LOADING_HOTEL_BY_ID,
  REPRESENTATIVE_LOADING_HOTELS,
  REPRESENTATIVE_RESET_FORM,
  REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY, REPRESENTATIVE_SELECT_PROPERTY_TYPE
} from '../types'
import { hideLoader, showLoader } from './appActions'

export function handleInputChange(name, value) {
  return {
    type: REPRESENTATIVE_INPUT_CHANGE,
    payload: {name, value}
  }
}
export function handleSelectPropertyTypeChange(name, value) {
  return {
    type: REPRESENTATIVE_SELECT_PROPERTY_TYPE,
    payload: {name, value}
  }
}
export function handleLoadCountry() {
  return async dispatch => {
    const request = await fetch('/api/country', {
      method: 'GET'
    })
    const data = await request.json()
    if (data.data.length) {
      dispatch({ type: REPRESENTATIVE_LOAD_COUNTRY, payload: data.data })
    }
  }
}
export function handleSelectCountry(name, value) {
  return async dispatch => {
    const body = JSON.stringify({[name]: value})
    const request = await fetch('/api/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await request.json()
    dispatch({ type: REPRESENTATIVE_SELECT_COUNTRY_LOAD_CITY, payload: {name, value, city: data.data} })
  }
}
export function handleAddHotel(formData) {
  return async dispatch => {
    try {
      const request = await fetch('/api/hotel/add', {
        mode: 'no-cors',
        method: 'POST',
        body: formData
      })
      const data = await request.json()
      console.log(data.message)
      dispatch({type: REPRESENTATIVE_RESET_FORM})
    } catch (e) {
      console.log(`Error: ${e}`)
    }
  }
}

export function handleLoadingHotels(id) {
  return async dispatch => {
    dispatch(showLoader())
    const body = JSON.stringify({id})
    const request = await fetch('/api/hotel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await request.json()
    dispatch({type: REPRESENTATIVE_LOADING_HOTELS, payload: data.data})
    dispatch(hideLoader())
  }
}
export function handleLoadingHotelById(id) {
  return async dispatch => {
    dispatch(showLoader())
    const request = await fetch(`/api/hotel/open/${id}`, {
      method: 'GET'
    })
    const data = await request.json()
    dispatch({ type: REPRESENTATIVE_LOADING_HOTEL_BY_ID, payload: data.data })
    dispatch(hideLoader())
  }
}