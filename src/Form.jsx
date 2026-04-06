import React, { useState } from 'react'

function Form() {
  const [formdata,setformData] =  useState({
       username:'',
       email:'',
       password:''
  });
  const handleChange =(event)=>{
         const {name,value} = event.target;
         setformData({
            ...formdata,
            [name]:value
         });
   }
  const showData=(event)=>{
      event.preventDefault();
      console.log("form", formdata);
  }
  return (
    <div onSubmit={showData}>
         <form>
              Username : <input type="text" id='username' name='username' value={formdata.username} onChange={handleChange}/>
              <br />
              Email : <input type="email" id='email' name='email' value={formdata.email} onChange={handleChange}/>
              <br />
              Password : <input type="password" id='password' name='password' value={formdata.password}
              onChange={handleChange}/>
              <button type="submit">submit</button>
         </form>
    </div>
  )
}

export default Form
