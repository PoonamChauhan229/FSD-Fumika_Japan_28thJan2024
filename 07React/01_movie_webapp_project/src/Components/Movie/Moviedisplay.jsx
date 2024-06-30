import React from 'react'
import Movie from './Movie'

const Moviedisplay = ({movieData,setMovieData}) => {
  return (
    <div className='d-flex gap-3 flex-wrap container ms-5'>
   {/* each movie card */}
    {
        movieData?.map((element,index)=><Movie {...element} key={index}setMovieData={setMovieData}/>)
    }
    </div>
  )
}

export default Moviedisplay