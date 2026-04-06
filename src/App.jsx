import React, { useState } from 'react'
import "./App.css"

function App() {
   const[status,setStatus] = useState(true);
  return (
    <div>
       <h1>Hide show & Toggle</h1>

       {status ? <div class="container">Hide show & Toggle</div>:null}

       <button onClick={()=>setStatus(false)}>Hide</button>
       <button onClick={()=>setStatus(true)}>Toggle</button>
       <button onClick={()=>setStatus(!status)}>Click!</button>
    </div>
  )
}

export default App
