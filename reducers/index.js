import { combineReducers } from 'redux'
import todos from './todos'
import firedux from '../store/firedux'

const rootReducer = combineReducers({
  todos: todos,
  firedux: firedux.reducer()
})

export default rootReducer
