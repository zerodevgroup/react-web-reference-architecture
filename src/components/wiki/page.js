import React, { useContext, useState, useEffect } from "react"
import { StoreContext } from "../../context/store-context"
import * as _ from "lodash"
import { makeStyles } from "@material-ui/core/styles"
import {markdown} from "markdown"
import {
  AppBar,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  CircularProgress,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  } from "@material-ui/core"

import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"

import CloseIcon from "@material-ui/icons/Close"

import { objectTypeSpreadProperty } from "@babel/types"

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  field: {
    marginTop: "30px",
    marginBottom: "30px",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  toolbar: {
    backgroundColor: "#C2C7CC",
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Page = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const {state, dispatch, actions } = useContext(StoreContext)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleMarkdownChange = (event) => {
    let wikiData = { ...state.wiki }

    wikiData.pages[state.wiki.currentPage].content = event.target.value

    actions.wikiUpdate(wikiData)
  }

  console.log("Page")
  if(state.wiki.currentPage) {
    return (
      <React.Fragment>
        <Typography variant="h1" component="h2">{state.wiki.pages[state.wiki.currentPage].title}</Typography>
        <Toolbar className={classes.toolbar}>
          <Button variant="contained" color="primary" onClick={handleClickOpen}>Edit</Button>
          <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} aria-labelledby="form-dialog-title">
            <AppBar className={classes.appBar}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  Edit Page
                </Typography>
                <Button autoFocus color="inherit" onClick={handleClose}>
                  Save
                </Button>
              </Toolbar>
            </AppBar>
            <TextField
              className={classes.field}
              id="markdown"
              value={state.wiki.pages[state.wiki.currentPage].content}
              label="Markdown"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
              onChange={handleMarkdownChange}
            />
          </Dialog>
        </Toolbar>
        <span dangerouslySetInnerHTML={ { __html: markdown.toHTML(state.wiki.pages[state.wiki.currentPage].content) } } />
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <Typography variant="h3" component="h4">No Page Selected</Typography>
      </React.Fragment>

    )

  }
}

export default Page

