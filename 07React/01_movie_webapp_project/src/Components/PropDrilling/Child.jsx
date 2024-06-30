import React from 'react'
import Newborn from './Newborn'

const Child = ({count,setCount}) => {
  return (
    <div>Child
      <Newborn count={count} setCount={setCount}/>
    </div>
  )
}

export default Child