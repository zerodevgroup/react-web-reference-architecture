import { types } from "./reducers"
export const useActions = (state, dispatch) => {
  function workflowUpdate(newWorkflow) {
    dispatch({ type: types.WORKFLOW_UPDATE, payload: newWorkflow })
  }

  return {
    workflowUpdate
  }
}
