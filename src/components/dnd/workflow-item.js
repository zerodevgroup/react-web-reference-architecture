import React from "react"
import styled from "styled-components"
import { Draggable } from "react-beautiful-dnd"

const Container = styled.div`
  border: 1px soid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-botom: 8px;
  background-color: ${props => (props.isDragDisabled ? "lightgrey" : props.isDragging ? "lightblue" : "white")}
  display: flex;
`

const Handle = styled.h3`
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 4px;
  margin-right: 8px;
`

export default class WorkflowItem extends React.Component {
  render() {
    const isDragDisabled = this.props.workflowItem.id === "workflow-item-1"

    return(
      <Draggable draggableId={this.props.workflowItem.id} index={this.props.index} isDragDisabled={isDragDisabled}>
        {(provided, snapshot) => (
          <Container {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} isDragging={snapshot.isDragging} isDragDisabled={isDragDisabled}>
            {this.props.workflowItem.content}
          </Container>
        )}
      </Draggable>
    )
  }
}
