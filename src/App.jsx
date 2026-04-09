import React, { useState,useMemo } from 'react'

function App() {
  const [number1,setNumber1] = useState(0);
  const[number2,setNumber2] = useState(0);
  const[count,setCount] = useState(0);

  const sum  = useMemo(()=>{
    console.log("calculating sum...")
    return number1+number2;
  },[number1,number2])

  return (
    <div>
      <h1>UseMemo</h1>
       <input type="text" value={number1} onChange={(e)=>setNumber1(number1+1)} />
       <input type="text" value={number2} onChange={(e)=>setNumber2(number2+1)} />
            <h1>sum:{sum}</h1>
       <button onClick={()=>setCount(count+1)}>Count++</button>
        <h2>Count:{count}</h2>
    </div>
  )
}

export default App
