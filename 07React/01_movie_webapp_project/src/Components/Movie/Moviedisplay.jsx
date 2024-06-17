import React from 'react'
import Movie from './Movie'

const Moviedisplay = ({movie}) => {
  return (
    <div className='d-flex gap-2 flex-wrap'>
   
    {
        movie.map((element,index)=><Movie {...element} id={index} key={index}/>)
    }
    </div>
  )
}

export default Moviedisplay