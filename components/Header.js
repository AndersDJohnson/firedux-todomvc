import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import store from '../store'
import firedux from '../store/firedux'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      // this.props.addTodo(text)
      store.dispatch((dispatch, getState) => {
        const state = getState()
        var { todos } = state.firedux.data
        todos = todos ? Object.values(todos) : []
        firedux.push('todos', {
          id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: text
        })
      })
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput newTodo
                         onSave={this.handleSave.bind(this)}
                         placeholder="What needs to be done?" />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header
