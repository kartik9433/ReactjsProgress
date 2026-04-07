import React, { Component } from 'react'

export default class RenderMethod extends Component {
  render() {
     console.log("render");
    return (
      <div>
          <h1>Render Method {this.props.data}</h1>
      </div>
    )
  }
}
