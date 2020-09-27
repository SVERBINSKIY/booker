import {
  ADD_TO_ADULT, ADD_TO_CHILDREN,
  ADD_TO_ROOM, MAIN_PAGE_INPUT_CHANGE,
  HIDE_GUEST_BLOCK, SET_CHECK_IN, SET_CHECK_OUT,
  SHOW_GUEST_BLOCK,
  TAKE_AWAY_TO_ADULT, TAKE_AWAY_TO_CHILDREN,
  TAKE_AWAY_TO_ROOM, MAIN_PAGE_INPUT_CHANGE_FOR_EMAIL
} from '../types'

export function mainPageInputChange(name, value) {
  return {
    type: MAIN_PAGE_INPUT_CHANGE,
    payload: { name, value }
  }
}
export function mainPageEmailInputChange(value) {
  return {
    type: MAIN_PAGE_INPUT_CHANGE_FOR_EMAIL,
    payload: value
  }
}
export function showGuest() {
  return { type: SHOW_GUEST_BLOCK, payload: 'active'}
}
export function hideGuest() {
  return { type: HIDE_GUEST_BLOCK, payload: 'none' }
}
export function guestControl(field, op) {
  if (field === 'room') {
    if (op === '+'){
      return { type: ADD_TO_ROOM }
    } else {
      return { type: TAKE_AWAY_TO_ROOM }
    }
  } else if (field === 'adult') {
    if (op === '+') {
      return { type: ADD_TO_ADULT }
    } else {
      return { type: TAKE_AWAY_TO_ADULT }
    }
  } else if (field === 'children') {
    if (op === '+') {
      return { type: ADD_TO_CHILDREN }
    } else {
      return  { type: TAKE_AWAY_TO_CHILDREN }
    }
  }
}
export function setCheckIn(date) {
  return {
    type: SET_CHECK_IN,
    payload: date
  }
}
export function setCheckOut(date) {
  return {
    type: SET_CHECK_OUT,
    payload: date
  }
}
