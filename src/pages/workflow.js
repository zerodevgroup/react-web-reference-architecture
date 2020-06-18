import React, { useContext } from "react";
import Column from "../components/dnd/column"
import { DragDropContext } from "react-beautiful-dnd"
import "@atlaskit/css-reset"
import styled from "styled-components"
import CardModal from "../components/workflow/card-modal"
import { StoreContext } from "../context/store-context"

const Container = styled.div`
  display: flex;
`

export default function WorkFlow() {
  const { state, dispatch, actions } = useContext(StoreContext)

  const onDragStart = (start) => {
  }

  const onDragUpdate = (update) => {
  }

  const onDragEnd = (result) => {
    let workflow = state.workflow

    document.body.style.color = "inherit"
    document.body.style.backgroundColor = "inherit"

    const { destination, source, draggableId } = result

    if(!destination) {
      return
    }
    
    if(destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }

    // WORKFLOW_GET_COLUMN
    const start = state.workflow.columns[source.droppabled]
    const finish = state.workflow.columns[destination.droppableId]

    // Moving WorkflowItems in the same Column
    if(start === finish) {
      const newWorkflowItemIds = Array.from(start.workflowItemIds)
      newWorkflowItemIds.splice(source.index, 1)
      newWorkflowItemIds.splice(destination.index, 0, draggableId)

      let newColumn = {
        ...start,
        workflowItemIds: newWorkflowItemIds,
      }

      // WORKFLOW_UPDATE_COLUMN
      const newState = {
        ...state.workflow,
        columns: {
          ...state.workflow.columns,
          [newColumn.id]: newColumn
        }
      }
      actions.workflowUpdate(newState)
    }
    // Moving WorkflowItems fron one Column to another
    else {
      const startWorkflowItemIds = Array.from(start.workflowItemIds)
      startWorkflowItemIds.splice(source.index, 1)

      const newStart = {
        ...start,
        workflowItemIds: startWorkflowItemIds,
      }

      const finishWorkflowItemIds = Array.from(finish.workflowItemIds)
      finishWorkflowItemIds.splice(destination.index, 0, draggableId)

      const newFinish = {
        ...finish,
        workflowItemIds: finishWorkflowItemIds,
      }

      console.log(startWorkflowItemIds, "START_WORKFLOW_ITEM_IDs")
      console.log(finishWorkflowItemIds, "FINISH_WORKFLOW_ITEM_IDs")

      // WORKFLOW_UPDATE_COLUMN
      const newState = {
        ...state.workflow,
        columns: {
          ...state.workflow.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        }
      }

      actions.workflowUpdate(newState)
    }
  }

  return(
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart} onDragUpdate={onDragUpdate}>
      <CardModal />
      <Container>
        {state.workflow.columnOrder.map((columnId, index) => {
          const column = state.workflow.columns[columnId]
          const workflowItems = column.workflowItemIds.map(
            workflowItemId => state.workflow.workflowItems[workflowItemId]
          )

          const isDropDisabled = index < state.workflow.homeIndex

          return <Column 
            key={column.id}
            column={column}
            workflowItems={workflowItems}
            isDropDisabled={isDropDisabled}
          />
        })}
      </Container>
    </DragDropContext>
  )
}


