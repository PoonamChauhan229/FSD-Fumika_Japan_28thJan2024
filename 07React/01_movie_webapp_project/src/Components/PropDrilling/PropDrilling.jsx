import React, { useState } from 'react'
import GrandParent from './GrandParent'

const PropDrilling = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
      <p>Main Prop Drilling</p>
      <GrandParent count={count} setCount={setCount}/>
    </div>
  )
}

export default PropDrilling
