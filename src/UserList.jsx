import React, { Component } from 'react'

export default class UserList extends Component {
 render() {
    console.log(this.props);
    return (
      <div>
         <h1>{this.props.name}</h1>
      </div>
    )
  }
}
