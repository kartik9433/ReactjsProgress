import React from 'react'

function App() {
  // const demo  = ()=>{
  //    alert("don't click on it")
  // };
  return (
    <div>
         <h1>hello</h1>
        <button onClick={()=>alert("don't click on it")}>click on me!</button>
    </div>
  )
}

export default App
