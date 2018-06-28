import React from "react"

import PlayerMetadata from "./player/PlayerMetadata"
import PlayerController from "./player/PlayerController"
import PlayerSecondaryController from "./player/PlayerSecondaryController"
 

export default class Player extends React.Component{
  render(){
    return (
      <div id="player">
        <PlayerMetadata trackTitle={this.props.trackTitle} trackArtist={this.props.trackArtist} trackImg={this.props.trackImg} />
        <PlayerController/>
        <PlayerSecondaryController/>
      </div>
    )
  }
}