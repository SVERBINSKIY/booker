import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { catalogReducer } from './catalogReducer'
import { loginReducer } from './loginReducer'
import { mainPageReducer } from './mainPageReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  mainPage: mainPageReducer,
  catalog: catalogReducer,
  login: loginReducer
})