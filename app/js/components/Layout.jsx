import React from "react"

import SideBar from "./SideBar"
import Browser from "./Browser"
import Player from "./Player" 

export default class Layout extends React.Component{
  constructor(){
    super()
    this.title = "The Ways"
    this.artist = "Khalid"
    this.img = "https://media.npr.org/assets/img/2018/01/31/black-panther_sq-b2bd19381f3b69b605d2470c0d0e4dcd46fb632b-s900-c85.jpeg"
  }
  render(){
    return (
      <div>
        <div id="content" className="container-fluid row">

          <SideBar/>
          <Browser loggedin="true"/>
        </div>
        <Player trackTitle={this.title} trackArtist={this.artist} trackImg={this.img} />
      </div>
    )
  }
}

