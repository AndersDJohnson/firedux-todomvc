import { combineReducers } from 'redux'
import firedux from '../store/firedux'

const rootReducer = combineReducers({
  firedux: firedux.reducer()
})

export default rootReducer
