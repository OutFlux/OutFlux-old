import React from "react"

import SideBar from "./SideBar"
import Browser from "./Browser"
import Player from "./Player" 

export default class Layout extends React.Component{
  render(){
    return (
      <div>
        <div id="content" className="container-fluid row">
          <SideBar/>
          <Browser loggedin="true"/>
        </div>
        <Player/>
      </div>
    )
  }
}

