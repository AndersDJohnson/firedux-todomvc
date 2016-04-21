import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import store from './store'
import 'todomvc-app-css/index.css'
import firedux from './store/firedux'

firedux.watch('todos')

firedux.push('todos',
  {
    text: 'Use Redux from Firebase',
    completed: false,
    id: 0
  }
)
.then((id) => {
  console.log('pushed value', id)
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
