import React,{memo} from 'react'

function PureCom() {
    console.log("child")
  return (
    <div>
        
    </div>
  )
}

export default memo(PureCom)
