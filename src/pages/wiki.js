import React, { Component } from "react"
import PageList from "../components/wiki/page-list"
import Page from "../components/wiki/page"

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
    Grid,
    Select,
    MenuItem,
    List,
    ListItem,
    ListItemText,
    CircularProgress,
    Checkbox
  } from '@material-ui/core';

class Wiki extends Component {

  render(){
    console.log("Wiki")
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <PageList/>
                </Grid>
                <Grid item md={9}>
                    <Page/>
                </Grid>
            </Grid>
        </React.Fragment>
    )
  }
}

export default Wiki
