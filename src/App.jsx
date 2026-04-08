import React, { useState } from 'react'
import ChildComponentA from './ChildComponentA';
import ChildComponetB from './ChildComponetB';

function App() {
  const[shared,setShared] = useState("");
  const handleChange= (newdata)=>{
        setShared(newdata);  
  }
  return (
    <div>
         <h1>Lifting up state</h1>
         <ChildComponentA shared={shared} handleChange={handleChange}/>
         <ChildComponetB shared={shared}></ChildComponetB>
    </div>
  )
}

export default App
