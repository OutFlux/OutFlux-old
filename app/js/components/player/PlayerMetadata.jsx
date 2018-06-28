import React from "react"

export default class PlayerMetadata extends React.Component{
  render(){
    return (
      <div className="col-3 row">
        <div id="trackImg" className="col-auto">
          <img src={this.props.trackImg} alt=""/>
        </div>
        <div className="col" id="trackMeta">
          <div id="trackTitle">
            <span>{this.props.trackTitle}</span>
          </div>
          <div id="trackArtists">
            <span>{this.props.trackArtist}</span>
          </div>
        </div>
      </div>
    )
  }
}