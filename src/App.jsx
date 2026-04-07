import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
       super();
    this.state = {
       name:"Hello Sir",
       count:0
    };
    console.log("constructor");
  }
   componentDidUpdate(){
    console.log("component did Mount");
   }
   
  render() {
          console.log("main method");
    return (
      <div className="container">
         <h1>LifeCycleMethodComponetDidUpdate</h1>
         <h1>count:{this.state.count}</h1>
         <button onClick={()=>this.setState({count:this.state.count+1})}>count</button>
         <h2>{this.state.name}</h2>
         <button onClick={()=>this.setState({name :"kartik"})}>Click</button>
      </div>
    )
  }
}
