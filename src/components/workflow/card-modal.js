import React, { useState, useContext } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import { StoreContext } from "../../context/store-context"

export default function CardModal() {
  const { state, dispatch, actions } = useContext(StoreContext)
  const [open, setOpen] = useState(false)
  const [workflowItemId, setWorkflowItemId] = useState()
  const [workflowItemContent, setWorkflowItemContent] = useState()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const createCard = (event) => {
    let workflow = state.workflow
    const newWorkflowItem = {id: workflowItemId, content: workflowItemContent}
    workflow.workflowItems[workflowItemId] = newWorkflowItem
    workflow.columns["column-1"].workflowItemIds.push(workflowItemId)

    actions.workflowUpdate(workflow)
  }

  return(
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create Task
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Worflow Item</DialogTitle>
        <DialogContent>
          <DialogContentText> 
            Add Item to Workflow
          </DialogContentText> 
          <TextField
            onChange={(event) => { setWorkflowItemId(event.target.value) } }
            autoFocus
            margin="dense"
            id="workflowItemId"
            label="ID"
            fullWidth
          />
          <TextField
            onChange={(event) => setWorkflowItemContent(event.target.value)}
            autoFocus
            margin="dense"
            id="workflowItemContent"
            label="Content"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={() => { createCard() }}>
            Create Card
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
