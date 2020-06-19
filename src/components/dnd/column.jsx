import React from 'react';
import styled from 'styled-components';
import Task from './task';
import {Droppable} from 'react-beautiful-dnd';

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgray;
    border-radius: 2px;
    width: 220px;

    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    padding: 8px;
`;
const TaskList = styled.div`
    padding: 8px;
    transition: background-color 0.2 ease;
    background-color: ${props => (props.isDraggingOver ? 'lightgrey' : 'white')};
    flex-grow: 1;
    min-height: 100px;
`;

export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable 
                    droppableId={this.props.column.id} 
                    isDropDisabled={this.props.isDropDisabled}
                    /* Controls isDroppable based on type */
                    // type={this.props.column.id === 'column-3' ? 'done' : 'active'}
                >
                    {(provided, snapshot) => (
                    <TaskList 
                        ref={provided.innerRef}    
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                    >
                        {this.props.tasks.map((task, index) => 
                            <Task key={task.id} task={task} index={index} />
                        )}
                        {provided.placeholder}
                    </TaskList>
                    )}
                </Droppable>
            </Container>
        );
    }
}
