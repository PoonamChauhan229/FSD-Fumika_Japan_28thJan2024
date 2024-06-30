import React from 'react'

const Newborn = ({count,setCount}) => {
  return (
    <>
    <div>Newborn</div>
    <p className='fs-4'>{count}</p>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    </>
  )
}

export default Newborn