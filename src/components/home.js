import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/store-context";
import { types } from "../context/reducers";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 500,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    padding: "20px"
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
}));


export default function Home() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const [todoInput, setTodoInput] = useState("");
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return(
    <Card className={classes.root}>
    <CardContent>
      <h1>To do list</h1>
      <p>
        Try to add duplicate items with both Direct dispatch and Action logic
      </p>
      <div className="form">
        <input
          name="todo"
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
        />
        <Button
          variant="outlined"
          color="primary"
          type="button" 
          onClick={() => actions.addTodoIfNotInList(todoInput)}
        >
          Add 
        </Button>
        <Button
          variant="outlined"
          color="primary"
          type="button"
          onClick={() =>
            dispatch({ type: types.ADD_TO_TODO_LIST, payload: todoInput })
          }
        >
          Add duplicate
        </Button>
      </div>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
 
      <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <ul>
        <h3>Todos</h3>
        {state.todoList.map(todo => (
          
          <li key={todo}s>
          <Chip
            label={todo}
            onClick={handleClick}
            onDelete={() =>
              dispatch({ type: types.REMOVE_FROM_TODO_LIST, payload: todo })
            }
          />
          </li>
        ))}
      </ul>
        </CardContent>
      </Collapse>
      </CardContent>
    </Card>
  )
}


