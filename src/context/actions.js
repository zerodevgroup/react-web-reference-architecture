import { types } from "./reducers"
export const useActions = (state, dispatch) => {
  function addTodoIfNotInList(newTodo) {
    const todoIndex = state.todoList.indexOf(newTodo)
    if (todoIndex !== -1) {
      alert("Todo is defined in list")
    } else {
      dispatch({ type: types.ADD_TO_TODO_LIST, payload: newTodo })
    }
  }

  return {
    addTodoIfNotInList
  }
}
