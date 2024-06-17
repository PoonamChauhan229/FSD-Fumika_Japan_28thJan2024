import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DesignInfo = ({movie}) => {
  const {id}=useParams()
  const location =useLocation()
  const [movieDetail,setMovieDetail]=useState(movie)
  return (
<>
{
  console.log(movieDetail)
}
{
  // console.log(movieDetail[5])
  console.log(movieDetail[id])
}
{/* <h1>ID No:{id}</h1> */}
{/* <h2>Location:{location.pathname}</h2> */}
<h1>{movieDetail[id].moviename}</h1>
<iframe width="670" height="377" src="https://www.youtube.com/embed/f_vbAtFSEc0" title={movieDetail[id].moviename} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<p>{movieDetail[id].summary}</p>

</>  )
}

export default DesignInfo