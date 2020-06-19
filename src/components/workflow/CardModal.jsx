import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { StoreContext } from "../../context/store-context"

export default function CardModal() {
  const { state, dispatch, actions } = useContext(StoreContext)
  const [open, setOpen] = useState(false);
  const [taskId, setTaskId] = useState();
  const [taskContent, setTaskContent] = useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

//   const handleTaskInputChange = (event) => {
//     const id = event.target.value;
//     const taskContent = event.target.name
//     state.campaign[name] = value
// }

  const createCard = (event) => {
    let workflow = state.workflow
    const newTask = {id : taskId, content : taskContent}
    workflow.tasks[taskId]=newTask
    workflow.columns["column-1"].taskIds.push(taskId)
    actions.workflowUpdate(workflow)
    console.log("New Card")

  }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Task to WorkFlow
          </DialogContentText>
          <TextField
            onChange={(event) => setTaskId(event.target.value)}
            autoFocus
            margin="dense"
            id="taskId"
            label="ID"
            fullWidth
          />
          <TextField
            onChange={(event) => setTaskContent(event.target.value)}
            autoFocus
            margin="dense"
            id="taskContent"
            label="Content"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={() => { createCard() }}>Create Card</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}