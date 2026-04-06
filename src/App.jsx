import React, { useState } from 'react'

function App() {

   const [data,setData]  = useState();
   const[inputValueShow,inputSetValueHide] = useState(false);

   const  handleChange =(event)=>{
       console.log(event.target.value);
       setData(event.target.value);
       inputSetValueHide(false);
    }
  return (
    <div>
          <h1 >{inputValueShow ? data : ''}</h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={()=>inputSetValueHide(true)}>click !</button>
    </div>
  )
}

export default App
