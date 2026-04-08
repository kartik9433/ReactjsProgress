import React from 'react'
import Table from 'react-bootstrap/Table';


function App() {
  const tableData  = [
    {id:1,name:"xyz",age:40,location:"Time Square"},
    {id:2,name:"yyy",age:50,location:"Time Square"},
    {id:3,name:"kmf",age:35,location:"Time Square"},
    {id:4,name:"xdfz",age:70,location:"Time Square"}
  ];
  return (
    <div>
      <h1>Table</h1>
        <Table>
            <thead>
                 <tr>
                     <th>Id</th>
                     <th>Name</th>
                     <th>Age</th>
                     <th>Location</th>
                 </tr>
            </thead>
           <tbody>
               {tableData.map((data,idx)=>(
                  <tr key={idx}>
                       <th>{data.id}</th>
                       <th>{data.name}</th>
                       <th>{data.age}</th>
                       <th>{data.location}</th>
                  </tr>
               ))}
           </tbody>
        </Table>
        
    </div>
  )
}

export default App
