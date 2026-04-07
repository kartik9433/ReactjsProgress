import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    console.log("constructor");
  }
   componentDidMount(){
    console.log("component did Mount");
   }
   
  render() {
          console.log("main method");
    return (
      <div className="container">
         <h1>LifeCycleMethodComponetDidUpdate</h1>
      </div>
    )
  }
}
