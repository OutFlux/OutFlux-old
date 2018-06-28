import React from "react"

export default class Browser extends React.Component{
  render(){
    return (
      <div id="browser" className="col">
          {this.props.loggedin}
          
      </div>
    )
    // may be useful: https://www.youtube.com/watch?v=_D1JGNidMr4
  }
}