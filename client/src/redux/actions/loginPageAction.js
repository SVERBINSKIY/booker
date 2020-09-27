import { SIGN_IN_INPUT_CHANGE, SIGNUP_INPUT_CHANGE } from '../types'

export function changeLoginInput(name, value) {
  console.log(name,':',value)
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