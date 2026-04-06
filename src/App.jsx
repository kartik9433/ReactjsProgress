import React from 'react'
import Detail from './Detail'


export default function App() {

  const Students = [
  {
    "id": 1,
    "name": "Aman Sharma",
    "age": 20,
    "course": "BTech CSE",
    "year": 2,
    "email": "aman.sharma@example.com"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "age": 21,
    "course": "BTech IT",
    "year": 3,
    "email": "priya.verma@example.com"
  },
  {
    "id": 3,
    "name": "Rohit Gupta",
    "age": 19,
    "course": "BTech CSE",
    "year": 1,
    "email": "rohit.gupta@example.com"
  }
]

  return (
    <div>
          {
            Students.map((user,idx)=>(
              <Detail
                 key={idx}
                 name = {user.name}
                 age = {user.age}
                 course = {user.course}
                 year = {user.year}
                 email = {user.email}
              />
            ))
          }
    </div>
  )
}
