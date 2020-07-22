import React, { Component } from "react"
import PageList from "../components/wiki/page-list"

class Wiki extends Component {

  render(){
    console.log("Wiki")
    return (
        <React.Fragment>
            <div>Wiki</div>
            <PageList></PageList>
        </React.Fragment>
    )
  }
}

export default Wiki
