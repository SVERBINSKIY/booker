import { SIGN_IN_INPUT_CHANGE, SIGNUP_INPUT_CHANGE } from '../types'

const initialState = {
  signUp: {
    name: '',
    email: '',
    password: ''
  },
  signIn: {
    email: '',
    password: ''
  }
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INPUT_CHANGE:
      return { ...state, signUp: {...state.signUp, [action.payload.name]: action.payload.value} }
    case SIGN_IN_INPUT_CHANGE:
      return { ...state, signIn: {...state.signIn, [action.payload.name]: action.payload.value} }
    default:
      return state
  }
}