import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { catalogReducer } from './catalogReducer'
import { loginReducer } from './loginReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  catalog: catalogReducer,
  login: loginReducer
})