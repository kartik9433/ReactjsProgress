import { useRef } from "react"
import React from 'react'

function App() {
  const inputRef = useRef(null);

  const handleChange = ()=>{
    const inputvalue  = inputRef.current.value;
    alert(`input value  ${inputvalue}`);
  }
  return (
    <div>
        <h1>useRef</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleChange}>Get input ref</button>
    </div>
  )
}

export default App
