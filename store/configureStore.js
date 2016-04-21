import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import firedux from './firedux'

export default function configureStore(initialState) {
  // const store = applyMiddleware(
  //   // thunk
  // )(createStore)(rootReducer, initialState)
  const store = createStore(rootReducer, initialState, applyMiddleware(
    thunk
  ))

  firedux.dispatch = store.dispatch

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
