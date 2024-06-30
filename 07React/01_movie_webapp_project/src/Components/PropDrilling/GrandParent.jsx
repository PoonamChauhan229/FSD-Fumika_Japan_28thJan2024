import React from 'react'
import Parent from './Parent'

const GrandParent = ({count,setCount}) => {
  return (
    <div>GrandParent
     <Parent count={count} setCount={setCount}/>
    </div>
  )
}

export default GrandParent