import React from 'react'

export default function Detail(props) {
    const {name ,age ,course,year,email} = props;
  return (
    <div>
         <h1>{name}</h1>
         <h1>{age}</h1>
         <h1>{course}</h1>
         <h1>{year}</h1>
         <h1>{email}</h1>
    </div>
  )
}
