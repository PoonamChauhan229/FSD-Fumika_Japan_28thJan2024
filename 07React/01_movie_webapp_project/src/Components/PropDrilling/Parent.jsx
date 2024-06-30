import React from 'react'
import Child from './Child'

const Parent = ({count,setCount}) => {
  return (
    <div>Parent
      <Child count={count} setCount={setCount}/>

    </div>
  )
}

export default Parent