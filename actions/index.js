import firedux from '../store/firedux'

export function addTodo(text) {
  return () => {
    firedux.push('todos', {
      completed: false,
      text
    })
  }
}

export function deleteTodo(id) {
  return () => {
    firedux.remove(`todos/${id}`)
  }
}

export function editTodo(id, text) {
  return () => {
    firedux.update(`todos/${id}`, {
      text
    })
  }
}

export function completeTodo(id) {
  return (dispatch, getState) => {
    const state = getState()
    const completed = state.firedux.data.todos[id].completed

    firedux.set(`todos/${id}/completed`, !completed)
  }
}

export function completeAll() {
  return (dispatch, getState) => {
    const state = getState()
    const todos = state.firedux.data.todos

    const areAllMarked = _.values(todos).every(todo => todo.completed)

    _.each(todos, (todo, id) => {
      firedux.set(`todos/${id}/completed`, !areAllMarked)
    })
  }
}

export function clearCompleted() {
  return (dispatch, getState) => {
    const state = getState()
    const todos = state.firedux.data.todos

    _.each(todos, (todo, id) => {
      if (todo.completed) {
        firedux.remove(`todos/${id}`)
      }
    })
  }
}
