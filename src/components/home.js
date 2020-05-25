import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/store-context";
import { types } from "../context/reducers";

export default function Home() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [todoInput, setTodoInput] = useState("");

  return(
    <div>
      <h1>Home</h1>
      <p>
        Try to add duplicate items with both Direct dispatch and Action logic
      </p>
      <div className="form">
        <input
          name="todo"
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
        />
        <button
          type="button"
          onClick={() => actions.addTodoIfNotInList(todoInput)}
        >
          actions.addTodoIfNotInList
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: types.ADD_TO_TODO_LIST, payload: todoInput })
          }
        >
          dispatch(ADD_TO_TODO_LIST)
        </button>
      </div>

      <h3>state.todoList</h3>
      <ul>
        {state.todoList.map(todo => (
          <li key={todo}>
            {todo}
            <button
              onClick={() =>
                dispatch({ type: types.REMOVE_FROM_TODO_LIST, payload: todo })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
