import React from 'react'

function ChildComponentA({shared,handleChange}) {
    const handlechangedata  = (event)=>{
        const newdata  = event.target.value;
        handleChange(newdata);
    }
  return (
    <div>
         <input type="text" value={shared} onChange={handlechangedata}/>
    </div>
  )
}

export default ChildComponentA
