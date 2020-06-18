const initialState = {
  workflow: {
    workflowItems: {},
    columns: {
      "column-1": {
        id: "column-1",
        title: "To do",
        workflowItemIds: [],
      },
      "column-2": {
        id: "column-2",
        title: "In Progress",
        workflowItemIds: [],
      },
      "column-3": {
        id: "column-3",
        title: "Done",
        workflowItemIds: [],
      },
    },
    columnOrder: ["column-1", "column-2", "column-3"],
  },
}

const types = {
  WORKFLOW_UPDATE: "WORKFLOW_UPDATE",
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WORKFLOW_UPDATE:
      return {
        ...state,
        workFlow: action.payload
      }
    default:
      throw new Error("Unexpected action")
  }
}
export { initialState, types, reducer }
