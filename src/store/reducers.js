import { combineReducers } from 'redux'
import locationReducer from './location'
import appDataReducer from './appData'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    appData: appDataReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
