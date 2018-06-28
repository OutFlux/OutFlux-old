import React from "react"

export default class Browser extends React.Component{
  render(){
    return (
      <div id="browser" className="col">
          {this.props.loggedin}
      </div>
    )
  }
}