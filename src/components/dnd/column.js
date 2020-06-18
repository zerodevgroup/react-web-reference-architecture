import React from "react"
import styled from "styled-components"
import WorkflowItem from "./workflow-item"
import {Droppable} from "react-beautiful-dnd"

const Container = styled.div`
  margin: 8px;
  border: 1px soid lightgray;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  padding: 8px;
`

const WorkflowItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2 ease;
  background-color: ${props => (props.isDraggindOver ? "lightgrey": "white")};
  flex-grow: 1;
  min-height: 100px;
`

export default class Column extends React.Component {
  render() {
    return(
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} isDropDisabled={this.props.isDropDisabled}>
          {(provided, snapshot) => (
            <WorkflowItemList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
              {this.props.workflowItems.map((workflowItem, index) => 
                <WorkflowItem key={workflowItem.id} workflowItem={workflowItem} index={index}/>
              )}
            </WorkflowItemList>
          )}
        </Droppable>
      </Container>
    )
  }
}
