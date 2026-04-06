import React, { Component } from 'react'

class App extends Component {
      constructor(){
         super();
         this.state ={
            data:"hello sir",
         };
      }
       demo(){
         this.setState({
            data:"kartik"
         });
      }
   render(){
       return (
             <>
              <h1>{this.state.data}</h1>
              <button onClick={()=>this.demo()}>click !</button>
             </>
        )
   }
}

export default App
