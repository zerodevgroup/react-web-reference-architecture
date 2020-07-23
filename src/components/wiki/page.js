import React, { useContext, useState, useEffect } from "react"
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
  } from "@material-ui/core"

import { objectTypeSpreadProperty } from "@babel/types"

const Page = () => {
    const {state, dispatch, actions } = useContext(StoreContext)

    console.log("Page")
    return (
        <React.Fragment>
            {state.wiki.currentPage ? <Typography>{state.wiki.pages[state.wiki.currentPage].title}</Typography> :<Typography>No Page Selected</Typography>}
        </React.Fragment>

    )
}

export default Page

