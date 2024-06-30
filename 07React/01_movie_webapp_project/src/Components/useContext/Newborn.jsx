import React, { useContext } from 'react'
import countContext from '../../utils/store_useContext'

const Newborn = () => {
  const [count,setCount]=useContext(countContext)
  console.log(count)
  return (
    <>
    <div>Newborn</div>
    <p className='fs-4'>{count}</p>
    <button onClick={()=>setCount(count+1)}>Inc</button>
    </>
  )
}

export default Newborn

//createContext
//provide that context > Published
//useContext           > Subscribing