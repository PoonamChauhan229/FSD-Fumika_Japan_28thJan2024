import React, { useContext } from 'react'
import Child from './Child'
import countContext from '../../utils/store_useContext'

const Parent = () => {
 const [data,setData]=useContext(countContext)
  return (
    <div>Parent   
     <Child/>
    </div>
  )
}

export default Parent