import {
  LOGIN_CHANGE,
  LOGOUT_CHANGE,
  NOT_LOGIN,
  REGISTER_CHANGE,
  SIGN_IN_INPUT_CHANGE,
  SIGNUP_INPUT_CHANGE
} from '../types'
const storageName = 'userData'

export function changeLoginInput(name, value) {
  return {
    type: SIGNUP_INPUT_CHANGE,
    payload: { name, value }
  }
}
export function changeSignInInput(name, value) {
  return {
    type: SIGN_IN_INPUT_CHANGE,
    payload: {name, value}
  }
}
export function handleRegister(form) {
  return async dispatch => {
    const body = JSON.stringify(form)
    const request = await fetch('/api/sign/up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await request.json()
    dispatch({ type: REGISTER_CHANGE, payload: data.status })
  }
}
export function handleLogin(form) {
  return async dispatch => {
    const body = JSON.stringify(form)
    const request = await fetch('/api/sign/in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
    const data = await request.json()
    if (data.status) {
      localStorage.setItem(storageName, JSON.stringify({token: data.token, userId: data.userId}))
    }
    dispatch({ type: LOGIN_CHANGE, payload: {status: data.status, token: data.token, userId: data.userId} })
  }
}
export function checkLogin() {
  const data = JSON.parse(localStorage.getItem(storageName))
  if (data && data.token) {
    return { type: LOGIN_CHANGE, payload: {status: true, token: data.token, userId: data.userId}}
  } else {
    return { type: NOT_LOGIN }
  }
}
export function handleLogout() {
  localStorage.removeItem(storageName)
  return { type: LOGOUT_CHANGE }
}