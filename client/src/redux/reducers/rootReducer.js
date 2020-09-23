import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { catalogReducer } from './catalogReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  catalog: catalogReducer
})