import React from "react"

export default class PlayerController extends React.Component{
  
  render(){
    return (
      <div className="col-6">
        <div id="playerButtons">
          <div className="shuffle col-3">
              <i className="fa fa-random"></i>
          </div>
          <div className="play-previous col-2">
            <i className="fa fa-step-backward"></i>
          </div>
          <div className="play col-2">
            <i className="fa fa-play"></i>
          </div>
          <div className="play-next col-2">
            <i className="fa fa-step-forward"></i>
          </div>
          <div className="repeat col-3">
            <i className="fa fa-retweet"></i>
          </div>
        </div>
        <div id="progressBar">
          <input type="range" id="bar" />
        </div>
      </div>
    )
  }
}