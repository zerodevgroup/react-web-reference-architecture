const initialState = {
  todoList: []
}

const types = {
  SET_TODO_LIST: "SET_TODO_LIST",
  ADD_TO_TODO_LIST: "ADD_TO_TODO_LIST",
  REMOVE_FROM_TODO_LIST: "REMOVE_FROM_TODO_LIST"
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TODO_LIST:
      return {
        ...state,
        todoList: action.payload
      }
    case types.ADD_TO_TODO_LIST:
      return {
        ...state,
        todoList: [...state.todoList, action.payload]
      }
    case types.REMOVE_FROM_TODO_LIST:
      return {
        ...state,
        todoList: state.todoList.filter(
          todo => todo !== action.payload)
      }
    default:
      throw new Error("Unexpected action")
  }
}
export { initialState, types, reducer }
