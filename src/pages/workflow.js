import React, { useContext } from 'react';
import Column from '../components/dnd/column';
import { DragDropContext } from 'react-beautiful-dnd';
import '@atlaskit/css-reset';
import styled from 'styled-components';

import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  Typography,
  Divider,
  TextField,
  ButtonGroup,
  Button,
  Card,
  InputLabel,
  FormControl,
  FormControlLabel,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Checkbox
} from '@material-ui/core';
import CardModal from "../components/workflow/CardModal"
import { StoreContext } from "../context/store-context"

const Container = styled.div`
  display: flex;
`;

export default function WorkFlow() {
  const { state, dispatch, actions } = useContext(StoreContext)

  const onDragStart = (start) => {
    /*
    const homeIndex = state.columnOrder.indexOf(start.source.droppableId);

    this.setState({
      homeIndex,
    });
    */
  };

  const onDragUpdate = (start) => {
  // onDragUpdate = update => {
  //   // Changes background color when task is moved
  //   const { destination } = update;
  //   const opacity = destination
  //   ? destination.index / Object.keys(this.state.tasks).length
  //   : 0;
  //   document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`;
  }

  const onDragEnd = (result) => {
    let workflow = state.workflow
    // this.setState ({
    //   homeIndex: null,
    // });

    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // WORKFLOW_GET_COLUMN
    const start = state.workflow.columns[source.droppableId];
    const finish = state.workflow.columns[destination.droppableId];

    //  Moving Tasks in the same Column
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      let newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      // WORKFLOW_UPDATE_COLUMN
      const newState = {
        ...state.workflow,
        columns: {
          ...state.workflow.columns,
          [newColumn.id]: newColumn,
        },
      };
      actions.workflowUpdate(newState)
      // return;
    } else {

      // Moving Tasks fron one Column to another
      const startTaskIds = Array.from(start.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...start,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finish.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        taskIds: finishTaskIds,
      };
      console.log(finishTaskIds, "FINISH TASK IDs")
      console.log(startTaskIds, "START TASK IDs")

      // WORKFLOW_UPDATE_COLUMN
      const newState = {
        ...state.workflow,
        columns: {
          ...state.workflow.columns,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      actions.workflowUpdate(newState)
    }
  };

  return (
    <DragDropContext
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
    >
      <CardModal/>
      <Container>
        {state.workflow.columnOrder.map((columnId, index) => {
          const column = state.workflow.columns[columnId];
          const tasks = column.taskIds.map(
            taskId => state.workflow.tasks[taskId]
          );

          const isDropDisabled = index < state.workflow.homeIndex;

          return <Column
            key={column.id}
            column={column}
            tasks={tasks}
            isDropDisabled={isDropDisabled}
          />;
        })}
      </Container>
    </DragDropContext>
  );

}

// ReactDOM.render(<DragTodo />, document.getElementById('root'));
