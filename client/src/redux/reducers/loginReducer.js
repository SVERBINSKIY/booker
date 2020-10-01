import { LOGIN_CHANGE, LOGOUT_CHANGE, REGISTER_CHANGE, SIGN_IN_INPUT_CHANGE, SIGNUP_INPUT_CHANGE } from '../types'

const initialState = {
  signUp: {
    name: '',
    email: '',
    password: ''
  },
  signIn: {
    email: '',
    password: ''
  },
  registerStatus: '',
  isAuth: false,
  token: '',
  userId: ''
}

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_INPUT_CHANGE:
      return { ...state, signUp: {...state.signUp, [action.payload.name]: action.payload.value} }
    case SIGN_IN_INPUT_CHANGE:
      return { ...state, signIn: {...state.signIn, [action.payload.name]: action.payload.value} }
    case REGISTER_CHANGE:
      return { ...state, registerStatus: action.payload, signUp: {...state.signUp, name: '', email: '', password: ''} }
    case LOGIN_CHANGE:
      return { ...state, isAuth: action.payload.status, token: action.payload.token, userId: action.payload.userId }
    case LOGOUT_CHANGE:
      return { ...state, isAuth: false, token: '', userId: '' }
    default:
      return state
  }
}