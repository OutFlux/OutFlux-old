import React from "react"

import PlayerMetadata from "./player/PlayerMetadata"
import PlayerController from "./player/PlayerController"
import PlayerSecondaryController from "./player/PlayerSecondaryController"
 

export default class Player extends React.Component{
  
  render(){
    return (
      <div id="player">
        <PlayerMetadata/>
        <PlayerController/>
        <PlayerSecondaryController/>
      </div>
    )
  }
}