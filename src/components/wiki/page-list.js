import React, { useContext, useState } from 'react';
import { StoreContext } from "../../context/store-context"
import * as _ from "lodash"
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
import { objectTypeSpreadProperty } from '@babel/types';

const PageList = () => {

    const createPage = (event) => {
        if (event.key === "Enter") {
          let wiki = {...state.wiki}
          let title = event.target.value
          let titleKey = _.camelCase(title)
          wiki.pages[titleKey] = {title: title}
          actions.wikiUpdate(wiki)
          //   handleEnter()
        }
    }
  
    const handleChange = (event) => {
        let value = event.target.value
        setNewPageTitle(value)
    }

    const {state, dispatch, actions } = useContext(StoreContext)
    const [newPageTitle, setNewPageTitle] = useState("")
    const [loaded, setLoaded] = useState(false)
    const [pages, setPages] = useState({})

    console.log("PageList")
    return (
        <React.Fragment>
            <div>PageList</div>
            <TextField
                onChange={handleChange}
                value={newPageTitle}
                autoFocus
                id="newPageTitle"
                label="Page Title"
                fullWidth
                onKeyPress={createPage}
            />
            <List>
            {Object.keys(state.wiki.pages).map((key) => 
                <ListItem button key={key}><ListItemText primary={state.wiki.pages[key].title}/></ListItem>
            )}
            </List>
        </React.Fragment>

    )
}

export default PageList

